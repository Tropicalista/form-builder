<?php
namespace App\Api;

use WP_REST_Controller;

/**
 * REST_API Handler
 */
class Settings extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->namespace = 'formello/v1';
        $this->rest_base = 'settings';
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
                'callback'        => array( $this, 'get_settings' ),
                'permission_callback' => array( $this, 'get_settings_permissions_check' ),
                'args'            => array( $this->get_collection_params() ),
            ),
        );
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/update',
            array(
                'methods'         => \WP_REST_Server::EDITABLE,
                'callback'        => array( $this, 'update_settings' ),
                'permission_callback' => array( $this, 'update_settings_permissions_check' ),
                'args'            => array( $this->get_collection_params() ),
            ),
        );
    }

    /**
     * Retrieves a collection of actions.
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    public function get_settings( $request ) {

        $settings = formello_get_settings();
        $settings['actions'] = $this->get_actions();

        $response = rest_ensure_response( $settings );

        return $response;

    }

    /**
     * Update settings.
     *
     * @param WP_REST_Request $request Full details about the request.
     *
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    public function update_settings( $request ) {

        $settings = $request->get_param('settings');

        if( !empty( $settings ) ){
            update_option( 'formello_settings', $settings );
        }

        $response = rest_ensure_response( $settings );

        return $response;

    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function get_settings_permissions_check( $request ) {
        return true;
    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function update_settings_permissions_check( $request ) {
        return current_user_can( 'manage_options' );
    }

    /**
     * Retrieves a collection of actions.
     *
     * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
     */
    private function get_actions() {

        $actions = array();

        /**
         * Filters the available form actions
         *
         * @param array $actions
         */
        $actions = apply_filters( 'formello_available_form_actions', $actions );

        return $actions;

    }
}
