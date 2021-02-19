<?php
namespace App\Api;

use WP_REST_Controller;

/**
 * REST_API Handler
 */
class Submissions extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->namespace = 'formello/v1';
        $this->rest_base = 'submissions';
    }

    /**
     * Register the routes
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<id>[\d]+)',
            array(
                'methods'         => \WP_REST_Server::READABLE,
                'callback'        => array( $this, 'get_submissions' ),
                'permission_callback' => array( $this, 'get_submissions_permissions_check' ),
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
    public function get_submissions( $request ) {

        $id = $request->get_param('id');

        $submissions    = formello_get_form_submissions( $id );
        //$columns        = $this->get_submission_columns( $submissions );
        //$hidden_columns = get_hidden_columns( get_current_screen() );
        
        $response = rest_ensure_response( $submissions );

        return $response;

    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function get_submissions_permissions_check( $request ) {
        return true;
    }

}
