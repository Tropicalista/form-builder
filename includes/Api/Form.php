<?php
namespace App\Api;

use WP_REST_Controller;

/**
 * REST_API Handler
 */
class Form extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->namespace = 'formello/v1';
        $this->rest_base = 'form';
    }

    /**
     * Register the routes
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base,
            array(
                'methods'         => \WP_REST_Server::READABLE,
                'callback'        => array( $this, 'get_items' ),
                'permission_callback' => array( $this, 'get_items_permissions_check' ),
                'args'            => array( $this->get_collection_params() ),
            ),
        );
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/create',
            array(
                'methods'         => \WP_REST_Server::CREATABLE,
                'callback'        => array( $this, 'create_item' ),
                'permission_callback' => array( $this, 'create_item_permissions_check' ),
                'args'            => array( $this->get_collection_params() ),
            ),
        );
        register_rest_route( 
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)', array(
            array(
                'methods'         => \WP_REST_Server::READABLE,
                'callback'        => array( $this, 'get_item' ),
                'permission_callback' => array( $this, 'get_item_permissions_check' ),
                'args'            => array( $this->get_collection_params() ),
            ),
            array(
                'methods'         => \WP_REST_Server::EDITABLE,
                'callback'        => array( $this, 'update_item' ),
                'permission_callback' => array( $this, 'update_item_permissions_check' ),
                'args'            => array( $this->get_collection_params() ),
            ),
            array(
                'methods'  => \WP_REST_Server::DELETABLE,
                'callback' => array( $this, 'delete_item' ),
                'permission_callback' => array( $this, 'delete_item_permissions_check' ),
                'args'            => array( $this->get_collection_params() ),
            ),
        ) );

    }

    /**
     * Retrieves a collection of items.
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    public function get_items( $request ) {
        $args = array( 
          'numberposts'     => -1, // -1 is for all
          'post_type'       => 'formello-form', // or 'post', 'page'
          'orderby'         => 'date', // or 'date', 'rand'
          'order'           => 'ASC', // or 'DESC'
          'page'            => 1,
          'posts_per_page'  => 2,
        );

        $query = new \WP_Query( $args );

        // set max number of pages and total num of posts
        $posts = $query->posts;
        
        $max_pages = $query->max_num_pages;
        $total = $query->found_posts;

        // set headers and return response      
        $response = new \WP_REST_Response($posts, 200);
        $response->header( 'X-WP-Total', $total ); 
        $response->header( 'X-WP-TotalPages', $max_pages );

        $result = rest_ensure_response( $response );

        return $result;
    }

    /**
     * Get one item from the collection
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|WP_REST_Response
     */
    public function get_item( $request ) {
        $id = $request->get_param('id');

        $item = get_post( $id );

        if( empty( $item ) || $item->post_type != 'formello-form' ){
            $item = new \WP_Error( 'no_posts', __('No form found'), array( 'status' => 404 ) ); // status can be changed to any number
        }
        $post_meta = get_post_meta( $id );
        $item->settings = array();

        if( !empty( $post_meta ) ){
            $item->settings = (array) maybe_unserialize( $post_meta['_formello_settings'][0] );
        }

        $response = rest_ensure_response( $item );

        return $response;
    }

    /**
     * Create one item from the collection
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|WP_REST_Response
     */
    public function create_item( $request ) {

        $title = $request->get_param('title');

        $form_title = sanitize_text_field( $title );
        $form_id    = wp_insert_post(
            array(
                'post_type'    => 'formello-form',
                'post_status'  => 'publish',
                'post_title'   => $form_title,
                'post_content' => '',
            )
        );

        $settings = get_option( 'formello_settings', null );

        update_post_meta( $form_id, '_formello_settings', array(
            'settings' => [
                'actions' => [],
                'validation' => [
                    'messages' => $settings['validation_messages'],
                ],
                'success_message' => __( 'Thank you! We will be in touch soon.', 'formello-forms' ),
                'load_stylesheet' => $settings['load_stylesheet'],
                'store_submissions' => $settings['store_submissions'],
                'recaptcha_enabled' => $settings['recaptcha']['enabled'],
                'recaptcha_site_key' => $settings['recaptcha']['site_key'],
                'recaptcha_secret_key' => $settings['recaptcha']['secret_key'],
                'recaptcha_threshold' => $settings['recaptcha']['threshold'],
                'recaptcha_version' => $settings['recaptcha']['version']
            ],
            'fields' => [],
        ) );

        $response = rest_ensure_response( [ 'id' => $form_id ] );

        return $response;

    }

    /**
     * Update one item from the collection
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|WP_REST_Response
     */
    public function update_item( $request ) {
        $title = $request->get_param('post_title');

        $form_title = sanitize_text_field( $title );
        $form_id    = wp_update_post(
            array(
                'ID'            => $request->get_param('ID'),
                'post_type'    => 'formello-form',
                'post_status'  => 'publish',
                'post_title'   => $form_title,
                'post_content' => $request->get_param('post_content'),
            )
        );
        $settings = $request->get_param('settings');

        update_post_meta( $form_id, '_formello_settings', $settings );

    }

    /**
     * Delete one item from the collection
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|WP_REST_Request
     */
    public function delete_item( $request ) {
        $id = $request->get_param('id');

        $item = wp_delete_post( $id );
        $response = rest_ensure_response( $item );

        return $response;

    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function get_items_permissions_check( $request ) {
        return true;
    }

    /**
     * Check if a given request has access to get a specific item
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|bool
     */
    public function get_item_permissions_check( $request ) {
        return $this->get_items_permissions_check( $request );
    }

    /**
     * Check if a given request has access to create items
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|bool
     */
    public function create_item_permissions_check( $request ) {
        return current_user_can( 'manage_options' );
    }

    /**
     * Check if a given request has access to update a specific item
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|bool
     */
    public function update_item_permissions_check( $request ) {
        return $this->create_item_permissions_check( $request );
    }

    /**
     * Check if a given request has access to delete a specific item
     *
     * @param WP_REST_Request $request Full data about the request.
     * @return WP_Error|bool
     */
    public function delete_item_permissions_check( $request ) {
        return $this->create_item_permissions_check( $request );
    }

    /**
     * Retrieves the query params for the items collection.
     *
     * @return array Collection parameters.
     */
    public function get_collection_params() {
        return [];
    }
}
