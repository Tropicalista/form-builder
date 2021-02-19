<?php
/*
Plugin Name: Formello
Plugin URI: https://example.com/
Description: A WordPress Vue.js starter plugin
Version: 0.1
Author: Tropicalista
Author URI: https://example.com/
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: formello
Domain Path: /languages
*/

// don't call the file directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * FORMELLO class
 *
 * @class FORMELLO The class that holds the entire FORMELLO plugin
 */
final class FORMELLO {

    /**
     * Plugin version
     *
     * @var string
     */
    public $version = '0.1.0';

    /**
     * Holds various class instances
     *
     * @var array
     */
    private $container = array();

    /**
     * Constructor for the FORMELLO class
     *
     * Sets up all the appropriate hooks and actions
     * within our plugin.
     */
    public function __construct() {

        $this->define_constants();

        register_activation_hook( __FILE__, array( $this, 'activate' ) );
        register_deactivation_hook( __FILE__, array( $this, 'deactivate' ) );

        add_action( 'plugins_loaded', array( $this, 'init_plugin' ) );
    }

    /**
     * Initializes the FORMELLO() class
     *
     * Checks for an existing FORMELLO() instance
     * and if it doesn't find one, creates it.
     */
    public static function init() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new FORMELLO();
        }

        return $instance;
    }

    /**
     * Magic getter to bypass referencing plugin.
     *
     * @param $prop
     *
     * @return mixed
     */
    public function __get( $prop ) {
        if ( array_key_exists( $prop, $this->container ) ) {
            return $this->container[ $prop ];
        }

        return $this->{$prop};
    }

    /**
     * Magic isset to bypass referencing plugin.
     *
     * @param $prop
     *
     * @return mixed
     */
    public function __isset( $prop ) {
        return isset( $this->{$prop} ) || isset( $this->container[ $prop ] );
    }

    /**
     * Define the constants
     *
     * @return void
     */
    public function define_constants() {
        define( 'FORMELLO_VERSION', $this->version );
        define( 'FORMELLO_FILE', __FILE__ );
        define( 'FORMELLO_PATH', dirname( FORMELLO_FILE ) );
        define( 'FORMELLO_INCLUDES', FORMELLO_PATH . '/includes' );
        define( 'FORMELLO_URL', plugins_url( '', FORMELLO_FILE ) );
        define( 'FORMELLO_ASSETS', FORMELLO_URL . '/assets' );
    }

    /**
     * Load the plugin after all plugis are loaded
     *
     * @return void
     */
    public function init_plugin() {
        $this->includes();
        $this->init_hooks();
    }

    /**
     * Placeholder for activation function
     *
     * Nothing being called here yet.
     */
    public function activate() {

        $installed = get_option( 'formello_installed' );

        if ( ! $installed ) {
            update_option( 'formello_installed', time() );

            /** @var wpdb */
            global $wpdb;

            // create table for storing submissions
            $table = $wpdb->prefix . 'hf_submissions';
            $wpdb->query("CREATE TABLE IF NOT EXISTS {$table}(
                `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
                `form_id` INT UNSIGNED NOT NULL,
                `data` TEXT NOT NULL,
                `user_agent` TEXT NULL,
                `ip_address` VARCHAR(255) NULL,
                `referer_url` VARCHAR(255) NULL,
                `submitted_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=INNODB CHARACTER SET={$wpdb->charset};");

        }

        update_option( 'formello_version', FORMELLO_VERSION );
    }

    /**
     * Placeholder for deactivation function
     *
     * Nothing being called here yet.
     */
    public function deactivate() {

    }

    /**
     * Include the required files
     *
     * @return void
     */
    public function includes() {

        require_once FORMELLO_INCLUDES . '/Assets.php';

        if ( $this->is_request( 'admin' ) ) {
            require_once FORMELLO_INCLUDES . '/Admin.php';
        }

        if ( $this->is_request( 'frontend' ) ) {
            require_once FORMELLO_INCLUDES . '/Frontend.php';
        }

        if ( $this->is_request( 'ajax' ) ) {
            //require_once FORMELLO_INCLUDES . '/class-ajax.php';
        }

        if( $this->is_request( 'rest' ) ){
            require_once FORMELLO_INCLUDES . '/Admin.php';
        }

        if( ! function_exists( 'formello_get_form' ) ) {
            require __DIR__ . '/vendor/autoload.php';
        }

    }

    /**
     * Initialize the hooks
     *
     * @return void
     */
    public function init_hooks() {

        add_action( 'init', array( $this, 'init_classes' ) );
        add_action( 'rest_init', array( $this, 'init_classes' ) );

        // Localize our plugin
        add_action( 'init', array( $this, 'localization_setup' ) );
    }

    /**
     * Instantiate the required classes
     *
     * @return void
     */
    public function init_classes() {

        if ( $this->is_request( 'frontend' ) ) {
            $this->container['frontend'] = new App\Frontend();
        }

        require_once FORMELLO_INCLUDES . '/Api.php';

        if ( $this->is_request( 'admin' ) ) {
            $this->container['admin'] = new App\Admin();
        }

        if ( $this->is_request( 'ajax' ) ) {
            // $this->container['ajax'] =  new App\Ajax();
        }

        $this->container['api'] = new App\Api();
        $this->container['assets'] = new App\Assets();

        // hook actions
        $mailchimp_action = new App\Actions\MailChimp();
        $mailchimp_action->hook();

        $email_action = new App\Actions\Email();
        $email_action->hook();

        // register post type
        register_post_type(
            'formello-form',
            array(
                'labels' => array(
                    'name'              => 'Formello Forms',
                    'singular_name'     => 'Formello Form',
                ),
                'public'                => false,
                'rest_base'             => 'formello',
                'show_in_rest'          => true,
                'exclude_from_search'   => true,
                'capabilities'          => array('manage_options'),
                'publicly_queryable'    => false,
                'rest_controller_class' => 'App\Api',
            )
        );
    }

    /**
     * Initialize plugin for localization
     *
     * @uses load_plugin_textdomain()
     */
    public function localization_setup() {
        load_plugin_textdomain( 'formello', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
    }

    /**
     * What type of request is this?
     *
     * @param  string $type admin, ajax, cron or frontend.
     *
     * @return bool
     */
    private function is_request( $type ) {
        switch ( $type ) {
            case 'admin' :
                return is_admin() && !defined( 'DOING_AJAX' );

            case 'ajax' :
                return defined( 'DOING_AJAX' );

            case 'rest' :
                return defined( 'REST_REQUEST' );

            case 'cron' :
                return defined( 'DOING_CRON' );

            case 'frontend' :
                return ( ! is_admin() || defined( 'DOING_AJAX' ) ) && ! defined( 'DOING_CRON' );
        }
    }

} // FORMELLO

$formello = FORMELLO::init();