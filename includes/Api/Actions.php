<?php
namespace App\Api;

use WP_REST_Controller;

/**
 * REST_API Handler
 */
class Actions extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->namespace = 'formello/v1';
        $this->rest_base = 'actions';
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
                'callback'        => array( $this, 'get_actions' ),
                'permission_callback' => array( $this, 'get_actions_permissions_check' ),
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
    public function get_actions( $request ) {

        $actions = array();

        /**
         * Filters the available form actions
         *
         * @param array $actions
         */
        $actions = apply_filters( 'formello_available_form_actions', $actions );

        return $actions;

    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function get_actions_permissions_check( $request ) {
        return true;
    }

}
