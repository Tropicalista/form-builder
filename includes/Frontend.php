<?php
namespace App;

use Rakit\Validation\Validator;

/**
 * Frontend Pages Handler
 */
class Frontend {

    private $validator = '';

    public function __construct() {
        $this->validator = new Validator;

        add_action( 'wp_ajax_formello', array( $this, 'listen_for_submit' ) );
        add_action( 'wp_ajax_nopriv_formello', array( $this, 'listen_for_submit' ) );
        add_shortcode( 'formello', [ $this, 'shortcode' ] );
        add_action( 'parse_request', array( $this, 'listen_for_preview' ) );
    }

    /**
     * @param Form $form
     * @param array $data
     * @return string
     */
    public function validate_form( Form $form, array $data ) {
        // validate honeypot field
        $honeypot_key = sprintf( '_formello_h%d', $form->ID );
        if ( ! isset( $data[ $honeypot_key ] ) || $data[ $honeypot_key ] !== '' ) {
            return 'spam';
        }

        // validate size of POST array
        if ( count( $data ) > $form->get_field_count() && apply_filters( 'formello_validate_form_request_size', true ) ) {
            return 'spam';
        }

        // validate recaptcha
        if( isset( $data['g-recaptcha-response'] ) ){
            $captcha_validate = $this->validateRecaptcha( $form, $data );
        }

        if( isset( $captcha_validate ) && ( $captcha_validate === false ) ){
            return 'invalid_captcha';
        }

        // perform validation
        $validation = $this->validator->make($data, $form->validation['constraints']);

        // then validate
        $validation->validate();

        if ($validation->fails()) {
            // handling errors
            $errors = $validation->errors();

            return $errors->firstOfAll();

        }

        $error_code = '';

        /**
         * This filter allows you to perform your own form validation. The dynamic portion of the hook refers to the form slug.
         *
         * Return a non-empty string if you want to raise an error.
         * Error codes with a specific error message are: "required_field_missing", "invalid_email", and "error"
         *
         * @param string $error_code
         * @param Form $form
         * @param array $data
         */
        $error_code = apply_filters( 'formello_validate_form_' . $form->slug, $error_code, $form, $data );

        /**
         * This filter allows you to perform your own form validation.
         *
         * Return a non-empty string if you want to raise an error.
         * Error codes with a specific error message are: "required_field_missing", "invalid_email", and "error"
         *
         * @param string $error_code
         * @param Form $form
         * @param array $data
         */
        $error_code = apply_filters( 'formello_validate_form', $error_code, $form, $data );

        if ( ! empty( $error_code ) ) {
            return $error_code;
        }

        // all good: no errors!
        return '';
    }

    private function validateRecaptcha( $form, $data ){

        $captcha_postdata = http_build_query(array(
                                    'secret' => $form->settings['settings']['recaptcha_secret_key'],
                                    'response' => $data['g-recaptcha-response'],
                                    'remoteip' => $_SERVER['REMOTE_ADDR']));
        $captcha_opts = array('http' => array(
                              'method'  => 'POST',
                              'header'  => 'Content-type: application/x-www-form-urlencoded',
                              'content' => $captcha_postdata));
        $captcha_context  = stream_context_create($captcha_opts);
        $captcha_response = json_decode(file_get_contents("https://www.google.com/recaptcha/api/siteverify" , false , $captcha_context), true);

        return $captcha_response['success'];
    }

    /**
    * Sanitize array with values before saving. Can be called recursively.
    *
    * @param mixed $value
    * @return mixed
    */
    public function sanitize( $value ) {
        if ( is_string( $value ) ) {
            // do nothing if empty string
            if ( $value === '' ) {
                return $value;
            }

            // strip slashes
            $value = stripslashes( $value );

            // strip all whitespace
            $value = trim( $value );

            // convert &amp; back to &
            $value = html_entity_decode( $value, ENT_NOQUOTES );
        } elseif ( is_array( $value ) || is_object( $value ) ) {
            $new_value = array();
            $vars      = is_array( $value ) ? $value : get_object_vars( $value );

            // do nothing if empty array or object
            if ( count( $vars ) === 0 ) {
                return $value;
            }

            foreach ( $vars as $key => $sub_value ) {
                // strip all whitespace & HTML from keys (!)
                $key = trim( strip_tags( $key ) );

                // sanitize sub value
                $new_value[ $key ] = $this->sanitize( $sub_value );
            }

            $value = is_object( $value ) ? (object) $new_value : $new_value;
        }

        return $value;
    }

    /**
    * @return array
    */
    public function get_request_data() {
        $data = $_POST;
        unset($data['action']);

        if ( ! empty( $_FILES ) ) {

            foreach ( $_FILES as $field_name => $file ) {
                // only add non-empty files so that required field validation works as expected
                // upload could still have errored at this point
                if ( $file['error'] !== UPLOAD_ERR_NO_FILE ) {
                    $data[ $field_name ] = $file;
                }
            }
        }

        return $data;
    }

    public function listen_for_submit() {

        // only respond to AJAX requests with _formello_form_id set.
        if ( empty( $_POST['_formello_form_id'] )
            || empty( $_SERVER['HTTP_X_REQUESTED_WITH'] )
            || strtolower( $_SERVER['HTTP_X_REQUESTED_WITH'] ) !== strtolower( 'XMLHttpRequest' ) ) {
            return;
        }

        $data       = $this->get_request_data();       
        $form_id    = (int) $data['_formello_form_id'];
        $form       = formello_get_form( $form_id );
        $error_code = $this->validate_form( $form, $data );
        // at this point we don't need anymore recaptcha
        if( isset( $data['g-recaptcha-response'] ) ){
            unset( $data['g-recaptcha-response'] );
        }

        if ( empty( $error_code ) ) {

            /**
            * Filters the field names that should be ignored on the Submission object.
            * Fields starting with an underscore (_) are ignored by default.
            *
            * @param array $names
            */
            $ignored_field_names = apply_filters( 'formello_ignored_field_names', array() );

            // filter out ignored field names
            foreach ( $data as $key => $value ) {
                if ( $key[0] === '_' || in_array( $key, $ignored_field_names ) ) {
                    unset( $data[ $key ] );
                    continue;
                }

                // this detects the WPBruiser token field to ensure it isn't stored
                // CAVEAT: this will detect any non-uppercase string with 2 dashes in the field name and no whitespace in the field value
                if ( class_exists('GoodByeCaptcha') && is_string( $key ) && is_string( $value ) && strtoupper( $key ) !== $key && substr_count( $key, '-' ) >= 2 && substr_count( trim( $value ), ' ' ) === 0 ) {
                    unset( $data[ $key ] );
                    continue;
                }
            }
            // process uploads of files
            foreach ($data as $key => $value) {
                if( is_array( $value ) ){
                    $this->processUploads( $value, $form_id );
                }
            }

            // sanitize data: strip tags etc.
            $data = $this->sanitize( $data );

            // save form submission
            $submission               = new Submission();
            $submission->form_id      = $form_id;
            $submission->data         = $data;
            $submission->ip_address   = ! empty( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( $_SERVER['REMOTE_ADDR'] ) : '';
            $submission->user_agent   = ! empty( $_SERVER['HTTP_USER_AGENT'] ) ? sanitize_text_field( $_SERVER['HTTP_USER_AGENT'] ) : '';
            $submission->referer_url  = ! empty( $_SERVER['HTTP_REFERER'] ) ? sanitize_text_field( $_SERVER['HTTP_REFERER'] ) : '';
            $submission->submitted_at = gmdate( 'Y-m-d H:i:s' );

            // save submission object so that other form processor have an insert ID to work with (eg file upload)
            if ( $form->settings['save_submissions'] ) {
                 $submission->save();
            }

            /**
            * General purpose hook that runs before all form actions, so we can still modify the submission object that is passed to actions.
            */
            do_action( 'formello_process_form', $form, $submission );

            // re-save submission object for convenience in form processors hooked into formello_process_form
            if ( $form->settings['save_submissions'] ) {
                 $submission->save();
            }

            // process form actions
            if ( isset( $form->settings['settings']['actions'] ) ) {
                foreach ( $form->settings['settings']['actions'] as $action_settings ) {
                    /**
                     * Processes the specified form action and passes related data.
                     *
                     * @param array $action_settings
                     * @param Submission $submission
                     * @param Form $form
                     */
                    do_action( 'formello_process_form_action_' . $action_settings['type'], $action_settings['settings'], $submission, $form );
                }
            }

            /**
             * General purpose hook after all form actions have been processed for this specific form. The dynamic portion of the hook refers to the form slug.
             *
             * @param Submission $submission
             * @param Form $form
             */
            do_action( "formello_form_{$form->slug}_success", $submission, $form );

            /**
             * General purpose hook after all form actions have been processed.
             *
             * @param Submission $submission
             * @param Form $form
             */
            do_action( 'formello_form_success', $submission, $form );
        } else {
            /**
             * General purpose hook for when a form error occurred
             *
             * @param string $error_code
             * @param Form $form
             * @param array $data
             */
            do_action( 'formello_form_error', $error_code, $form, $data );
        }

        $response = $this->get_response_for_error_code( $error_code, $form, $data );
        if ( ob_get_level() > 0 ) {
            ob_end_clean();
        }

        send_origin_headers();
        send_nosniff_header();
        nocache_headers();

        wp_send_json( $response, 200 );
        wp_die();

    }

    public function listen_for_preview() {
        if ( empty( $_GET['formello_preview_form'] ) || ! current_user_can( 'edit_forms' ) ) {
            return;
        }

        try {
            $form = formello_get_form( $_GET['formello_preview_form'] );
        } catch ( \Exception $e ) {
            return;
        }

        show_admin_bar( false );
        add_filter( 'pre_handle_404', '__return_true' );
        remove_all_actions( 'template_redirect' );
        add_action(
            'template_redirect',
            function() use ( $form ) {
                // clear output, some plugin or hooked code might have thrown errors by now.
                if ( ob_get_level() > 0 ) {
                    ob_end_clean();
                }

                status_header( 200 );
                require FORMELLO_PATH . '/views/form-preview.php';
                exit;
                //wp_die(); 
            }
        );
    }

    private function get_response_for_error_code( $error_code, Form $form, $data = array() ) {

        // return success response for empty error code string or spam (to trick bots)
        if ( $error_code === '' || $error_code === 'spam' ) {
            $response = array(
                'message'   => array(
                    'type' => 'success',
                    'text' => $form->get_message( 'success' ),
                ),
                'hide_form' => (bool) $form->settings['settings']['hide_form'],
            );

            if ( ! empty( $form->settings['settings']['redirect_url'] ) ) {
                $response['redirect_url'] = formello_replace_data_variables( $form->settings['settings']['redirect_url'], $data, 'urlencode' );
            }

            return apply_filters( 'formello_form_response', $response, $form, $data );
        }

        // get error message
        $message = $form->get_message( $error_code );
        if ( empty( $message ) ) {
            $message = $form->get_message( 'error' );
        }

        // return error response
        return array(
            'message' => array(
                'type' => 'warning',
                'text' => $message,
            ),
            'error'   => $error_code,
        );
    }

    public function shortcode( $attributes = array(), $content = '' ) {

        if ( empty( $attributes['slug'] ) && empty( $attributes['id'] ) ) {
            return '';
        }

        $slug_or_id = empty( $attributes['id'] ) ? $attributes['slug'] : $attributes['id'];
        try {

            $form = formello_get_form( $slug_or_id );

            unset($form->settings['settings']['recaptcha_secret_key']);
            unset($form->settings['settings']['actions']);

            wp_localize_script(
                'formello-frontend',
                'formello_vars',
                array(
                    'ajax_url' => admin_url( 'admin-ajax.php' ),
                    'formello_settings' => $form->settings['settings'],
                )
            );

            if( $form->settings['settings']['recaptcha_enabled'] ){
                wp_enqueue_script( 'recaptcha', 'https://www.google.com/recaptcha/api.js' );
            };

            if( $form->settings['settings']['load_stylesheet'] ){
                wp_enqueue_style( 'formello-style' );
            };

            if( $form->settings['settings']['has_date'] ){
                wp_enqueue_style( 'flatpickr' ,'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css' );
                wp_enqueue_script( 'flatpickr' );
            };

            //wp_enqueue_script( 'formello-frontend' );

        } catch ( \Exception $e ) {
            if ( ! current_user_can( 'manage_options' ) ) {
                return $content;
            }

            return sprintf( '<p><strong>%s</strong> %s</p>', __( 'Error:', 'formello' ), sprintf( __( 'No form found with id %s', 'formello' ), $attributes['id'] ) );
        }

        return $form . $content;
    }

    private function processUploads( $file, $form_id ){

        // Define data.
        $file_name            = sanitize_file_name( $file['name'] );
        $file_ext             = pathinfo( $file_name, PATHINFO_EXTENSION );
        $file_base            = wp_basename( $file_name, ".$file_ext" );
        $file_name_new        = sprintf( '%s-%s.%s', $file_base, wp_hash( $file_name . uniqid() . $form_id ), strtolower( $file_ext ) );
        $uploads              = wp_upload_dir();
        $formello_uploads_root = trailingslashit( $uploads['basedir'] ) . 'formello';

        // Add filter to allow redefine store directory.
        $custom_uploads_root = apply_filters( 'formello_upload_root', $formello_uploads_root );
        if ( wp_is_writable( $custom_uploads_root ) ) {
            $formello_uploads_root = $custom_uploads_root;
        }

        $form_directory         = absint( $form_id ) . '-' . md5( $form_id );
        $formello_uploads_form  = trailingslashit( $formello_uploads_root ) . $form_directory;
        $file_new               = trailingslashit( $formello_uploads_form ) . $file_name_new;
        $file_url               = trailingslashit( $uploads['baseurl'] ) . 'formello/' . trailingslashit( $form_directory ) . $file_name_new;

        // Check for form upload directory destination.
        if ( ! file_exists( $formello_uploads_form ) ) {
            wp_mkdir_p( $formello_uploads_form );
        }

        // Check if the index.html exists in the root uploads director, if not create it.
        if ( ! file_exists( trailingslashit( $formello_uploads_root ) . 'index.html' ) ) {
            file_put_contents( trailingslashit( $formello_uploads_root ) . 'index.html', '' );
        }

        // Move the file to the uploads dir - similar to _wp_handle_upload().
        $move_new_file = @move_uploaded_file( $file['tmp_name'], $file_new );

        // Set correct file permissions.
        $stat  = stat( dirname( $file_new ) );
        $perms = $stat['mode'] & 0000666;
        @ chmod( $file_new, $perms );

    }

}
