<?php

use App\Form;
use App\Submission;

/**
 * @param array $args
 * @return array
 */
function formello_get_forms( array $args = array() ) {
	$default_args = array(
		'post_type'           => 'formello-form',
		'post_status'         => array( 'publish', 'draft', 'pending', 'future' ),
		'posts_per_page'      => -1,
		'ignore_sticky_posts' => true,
		'no_found_rows'       => true,
	);
	$args         = array_merge( $default_args, $args );
	$query        = new WP_Query;
	$posts        = $query->query( $args );
	$forms        = array_map( 'formello_get_form', $posts );
	return $forms;
}

/**
 * @param $form_id_or_slug int|string|WP_Post
 * @return Form
 * @throws Exception
 */
function formello_get_form( $form_id_or_slug ) {

	if ( is_numeric( $form_id_or_slug ) || $form_id_or_slug instanceof WP_Post ) {
		$post = get_post( $form_id_or_slug );

		if ( ! $post instanceof WP_Post || $post->post_type !== 'formello-form' ) {
			throw new Exception( 'Invalid form ID' );
		}
	} else {

		$query = new WP_Query;
		$posts = $query->query(
			array(
				'post_type'           => 'formello-form',
				'name'                => $form_id_or_slug,
				'post_status'         => 'publish',
				'posts_per_page'      => 1,
				'ignore_sticky_posts' => true,
				'no_found_rows'       => true,
			)
		);
		if ( empty( $posts ) ) {
			throw new Exception( 'Invalid form slug' );
		}
		$post = $posts[0];
	}

	// get all post meta in a single call for performance
	$post_meta = get_post_meta( $post->ID );

	// grab & merge form settings
	$default_settings = array(
		'save_submissions'   => 1,
		'hide_after_success' => 0,
		'redirect_url'       => '',
	);
	$default_settings = apply_filters( 'formello_form_default_settings', $default_settings );
	$settings         = array();
	if ( ! empty( $post_meta['_formello_settings'][0] ) ) {
		$settings = (array) maybe_unserialize( $post_meta['_formello_settings'][0] );
	}
	$settings = array_merge( $default_settings, $settings );

	// grab & merge form messages
	$default_messages = array(
		'success'                => __( 'Thank you! We will be in touch soon.', 'formello' ),
		'error'                  => __( 'Oops. An error occurred.', 'formello' ),
	);
	$default_messages = apply_filters( 'formello_form_default_messages', $default_messages );
	$messages         = [
		'success' => $settings['settings']['success_message']
	];

	$messages = array_merge( $default_messages, $messages );

	// finally, create form instance
	$form           = new Form( $post->ID );
	$form->title    = $post->post_title;
	$form->slug     = $post->post_name;
	$form->markup   = $post->post_content;
	$form->settings = $settings;
	$form->messages = $messages;
	$form->validation = $settings['settings']['validation'];
	return $form;
}

/**
 * @param $form_id
 * @param array $args
 * @return Submission[]
 */
function formello_get_form_submissions( $form_id, array $args = array() ) {
	$default_args = array(
		'offset' => 0,
		'limit'  => 10,
	);
	$args         = array_merge( $default_args, $args );

	global $wpdb;
	$table       = $wpdb->prefix . 'formello_submissions';
	$results     = $wpdb->get_results( $wpdb->prepare( "SELECT s.* FROM {$table} s WHERE s.form_id = %d ORDER BY s.submitted_at DESC LIMIT %d, %d;", $form_id, $args['offset'], $args['limit'] ) );

	$submissions = array();
	foreach ( $results as $key => $object ) {
		$submission          = Submission::from_object( $object );
		$submissions[ $key ] = $submission;
	}
	return $submissions;
}

/**
 * @param int $submission_id
 * @return Submission
 */
function formello_get_form_submission( $submission_id ) {
	global $wpdb;
	$table      = $wpdb->prefix . 'formello_submissions';
	$object     = $wpdb->get_row( $wpdb->prepare( "SELECT s.* FROM {$table} s WHERE s.id = %d;", $submission_id ), OBJECT );
	$submission = Submission::from_object( $object );
	return $submission;
}

/**
 * @return array
 */
function formello_get_settings() {
	$default_settings = array(
		'load_stylesheet' => true,
		'store_submissions' => false,
		'validation_messages' => [
			'missingValue' => [
				'default' 			=> 'Please fill out this field.',
				'checkbox' 			=> 'This field is required.',
				'radio' 			=> 'Please select a value.',
				'select' 			=> 'Please select a value.',
				'select-multiple'	=> 'Please select at least one value.',
			],
			'patternMismatch' => [
				'email' 	=> 'Please enter a valid email address.',
				'url' 		=> 'Please enter a URL.',
				'number' 	=> 'Please enter a number',
				'color' 	=> 'Please match the following format: #rrggbb',
				'date' 		=> 'Please use the YYYY-MM-DD format',
				'time' 		=> 'Please use the 24-hour time format. Ex. 23:00',
				'month' 	=> 'Please use the YYYY-MM format',
				'default' 	=> 'Please match the requested format.'
			],
			'outOfRange' 	=> [
				'over' 		=> 'Please select a value that is no more than {max}.',
				'under' 	=> 'Please select a value that is no less than {min}.'
			],
			'wrongLength' 	=> [
				'over' 		=> 'Please shorten this text to no more than {maxLength} characters. You are currently using {length} characters.',
				'under' 	=> 'Please lengthen this text to {minLength} characters or more. You are currently using {length} characters.'
			]
		],
        'recaptcha' => [
        	'enabled' => false,
            'version' => 3,
            'site_key' => '',
            'secret_key' => '',
            'message' => '',
            'threshold' => 0.4
        ],
	);

	$settings = get_option( 'formello_settings', null );

	// prevent a SQL query when option does not yet exist
	if ( $settings === null ) {
		update_option( 'formello_settings', array(), true );
		$settings = array();
	}

	// merge with default settings
	$settings = array_merge( $default_settings, $settings );

	/**
	* Filters the global HTML Forms formello_settings
	*
	* @param array $settings
	*/
	$settings = apply_filters( 'formello_settings', $settings );

	return $settings;
}

/**
* Get element from array, allows for dot notation eg: "foo.bar"
*
* @param array $array
* @param string $key
* @param mixed $default
* @return mixed
*/
function formello_array_get( $array, $key, $default = null ) {
	if ( is_null( $key ) ) {
		return $array;
	}

	if ( isset( $array[ $key ] ) ) {
		return $array[ $key ];
	}

	foreach ( explode( '.', $key ) as $segment ) {
		if ( ! is_array( $array ) || ! array_key_exists( $segment, $array ) ) {
			return $default;
		}

		$array = $array[ $segment ];
	}

	return $array;
}

/**
 * Processes template tags like {{user.user_email}}
 *
 * @param string $template
 *
 * @return string
 */
function formello_template( $template ) {
	$replacers = new App\TagReplacers();
	$tags      = array(
		'user'       => array( $replacers, 'user' ),
		'post'       => array( $replacers, 'post' ),
		'url_params' => array( $replacers, 'url_params' ),
	);

	/**
	* Filters the available tags in HTML Forms templates, like {{user.user_email}}.
	*
	* Can be used to add simple scalar replacements or more advanced replacement functions that accept a parameter.
	*
	* @param array $tags
	*/
	$tags = apply_filters( 'formello_template_tags', $tags );

	$template = preg_replace_callback(
		'/\{\{ *(\w+)(?:\.([\w\.]+))? *(?:\|\| *(\w+))? *\}\}/',
		function( $matches ) use ( $tags ) {
			$tag     = $matches[1];
			$param   = ! isset( $matches[2] ) ? '' : $matches[2];
			$default = ! isset( $matches[3] ) ? '' : $matches[3];

			// do not change anything if we have no replacer with that key, could be custom user logic or another plugin.
			if ( ! isset( $tags[ $tag ] ) ) {
				return $matches[0];
			}

			$replacement = $tags[ $tag ];
			$value       = is_callable( $replacement ) ? call_user_func_array( $replacement, array( $param ) ) : $replacement;
			return ! empty( $value ) ? $value : $default;
		},
		$template
	);

	return $template;
}

/**
 * @param string $string
 * @param array $data
 * @param Closure|string $escape_function
 * @return string
 */
function formello_replace_data_variables( $string, $data = array(), $escape_function = null ) {
	$string = preg_replace_callback(
		'/\[([a-zA-Z0-9\-\._]+)\]/',
		function( $matches ) use ( $data, $escape_function ) {
			$key         = $matches[1];
			$replacement = formello_array_get( $data, $key, '' );
			$replacement = formello_field_value( $replacement, 0, $escape_function );
			return $replacement;
		},
		$string
	);
	return $string;
}

/**
* Returns a formatted & HTML-escaped field value. Detects file-, array- and date-types.
*
* Caveat: if value is a file, an HTML string is returned (which means email action should use "Content-Type: html" when it includes a file field).
*
* @param string|array $value
* @param int $limit
* @param Closure|string $escape_function
* @return string
* @since 1.3.1
*/
function formello_field_value( $value, $limit = 0, $escape_function = 'esc_html' ) {
	if ( $value === '' ) {
		return $value;
	}

	if ( formello_is_file( $value ) ) {
		$file_url = isset( $value['url'] ) ? $value['url'] : '';
		if ( isset( $value['attachment_id'] ) ) {
			$file_url = admin_url( sprintf( 'post.php?action=edit&post=%d', $value['attachment_id'] ) );
		}
		$short_name = substr( $value['name'], 0, 20 );
		$suffix     = strlen( $value['name'] ) > 20 ? '...' : '';
		return sprintf( '<a href="%s">%s%s</a> (%s)', esc_attr( $file_url ), esc_html( $short_name ), esc_html( $suffix ), formello_human_filesize( $value['size'] ) );
	}

	if ( formello_is_date( $value ) ) {
		$date_format = get_option( 'date_format' );
		return gmdate( $date_format, strtotime( $value ) );
	}

	// join array-values with comma
	if ( is_array( $value ) ) {
		$value = join( ', ', $value );
	}

	// limit string to certain length
	if ( $limit > 0 ) {
		$limited = strlen( $value ) > $limit;
		$value   = substr( $value, 0, $limit );

		if ( $limited ) {
			$value .= '...';
		}
	}

	// escape value
	if ( $escape_function !== null && is_callable( $escape_function ) ) {
		$value = $escape_function( $value );
	}

	return $value;
}

/**
* Returns true if value is a "file"
*
* @param mixed $value
* @return bool
*/
function formello_is_file( $value ) {
	return is_array( $value )
		&& isset( $value['name'] )
		&& isset( $value['size'] )
		&& isset( $value['type'] );
}

/**
* Returns true if value looks like a date-string submitted from a <input type="date">
* @param mixed $value
* @return bool
* @since 1.3.1
*/
function formello_is_date( $value ) {

	if ( ! is_string( $value )
			|| strlen( $value ) !== 10
			|| (int) preg_match( '/\d{2,4}[-\/]\d{2}[-\/]\d{2,4}/', $value ) === 0 ) {
		return false;
	}

	$timestamp = strtotime( $value );
	return $timestamp != false;
}

/**
 * @param int $size
 * @param int $precision
 * @return string
*/
function formello_human_filesize( $size, $precision = 2 ) {
	for ( $i = 0; ( $size / 1024 ) > 0.9; $i++, $size /= 1024 ) {
		// nothing, loop logic contains everything
	}
	$steps = array( 'B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' );
	return round( $size, $precision ) . $steps[ $i ];
}
