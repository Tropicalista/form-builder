<?php
namespace App;

/**
 * Admin Pages Handler
 */
class Admin {

    public function __construct() {
        $this->register();
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
        add_action( 'parse_request', array( $this, 'listen_for_preview' ) );
    }

    /**
     * Register our menu page
     *
     * @return void
     */
    public function admin_menu() {
        global $submenu;

        $capability = 'manage_options';
        $slug       = 'formello';

        $hook = add_menu_page( __( 'Forms', 'textdomain' ), __( 'Forms', 'textdomain' ), $capability, $slug, [ $this, 'plugin_page' ], 'dashicons-text' );

        if ( current_user_can( $capability ) ) {
            $submenu[ $slug ][] = array( __( 'All Forms', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/' );
            $submenu[ $slug ][] = array( __( 'New Form', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/new' );
            $submenu[ $slug ][] = array( __( 'Settings', 'textdomain' ), $capability, 'admin.php?page=' . $slug . '#/settings' );
        }

        add_action( 'load-' . $hook, [ $this, 'init_hooks'] );
    }

    /**
     * Initialize our hooks for the admin page
     *
     * @return void
     */
    public function init_hooks() {
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
    }

    /**
     * Load scripts and styles for the app
     *
     * @return void
     */
    public function enqueue_scripts() {
        wp_enqueue_style( 'baseplugin-admin' );
        wp_enqueue_style( 'baseplugin-vendors' );
        wp_enqueue_script( 'baseplugin-admin' );
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page() {
        echo '<div class="wrap"><div id="formello-app"></div></div>';
    }

    public function register() {

        // register post type
        /*register_post_type(
            'formello-form',
            array(
                'labels'          => array(
                    'name'          => 'Formello Forms',
                    'singular_name' => 'Formello Form',
                ),
                'public'            => true,
                'rest_base'         => 'formello',
                'show_in_rest'      => true,
                'rest_controller_class' => 'WP_REST_Posts_Controller',
            )
        );*/

        /*if ( function_exists( 'register_block_type' ) ) {
            register_block_type(
                'formello-forms/form',
                array(
                    'render_callback' => array( $this, 'shortcode' ),
                )
            );
        }*/

        //add_shortcode( 'formello_form', array( $this, 'shortcode' ) );
    }

}
