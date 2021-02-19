<?php
namespace App\Api;

use WP_REST_Controller;
use \DrewM\MailChimp\MailChimp;

/**
 * REST_API Handler
 */
class Integrations extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->namespace = 'formello/v1';
        $this->rest_base = 'mailchimp';
    }

    /**
     * Register the routes
     *
     * @return void
     */
    public function register_routes() {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/list',
            array(
                'methods'         => \WP_REST_Server::CREATABLE,
                'callback'        => array( $this, 'get_lists' ),
                'permission_callback' => array( $this, 'get_lists_permissions_check' ),
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
    public function get_lists( $request ) {

        $key = $request->get_param('settings');
        
        $mailChimp = new MailChimp($key);

        $result = $mailChimp->get('lists');

        return rest_ensure_response($result);
    }

    /**
     * Checks if a given request has access to read the items.
     *
     * @param  WP_REST_Request $request Full details about the request.
     *
     * @return true|WP_Error True if the request has read access, WP_Error object otherwise.
     */
    public function get_lists_permissions_check( $request ) {
        return current_user_can( 'manage_options' );
    }

}
