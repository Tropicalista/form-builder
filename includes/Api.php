<?php
namespace App;

use WP_REST_Controller;

/**
 * REST_API Handler
 */
class Api extends WP_REST_Controller {

    /**
     * [__construct description]
     */
    public function __construct() {
        $this->includes();
        add_action( 'rest_api_init', [ $this, 'register_routes' ] );
    }

    /**
     * Include the controller classes
     *
     * @return void
     */
    private function includes() {
        if ( !class_exists( __NAMESPACE__ . '\Api\Form'  ) ) {
            require_once __DIR__ . '/Api/Form.php';
        }
    }

    /**
     * Register the API routes
     *
     * @return void
     */
    public function register_routes() {
        (new Api\Form())->register_routes();
        (new Api\Actions())->register_routes();
        (new Api\Integrations())->register_routes();
        (new Api\Submissions())->register_routes();
        (new Api\Settings())->register_routes();
    }

}
