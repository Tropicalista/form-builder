<?php
namespace App;

/**
 * Admin Pages Handler
 */
class Admin {

    public function __construct() {
        add_action( 'admin_menu', [ $this, 'admin_menu' ] );
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

        $hook = add_menu_page( __( 'Formello', 'formello' ), __( 'Formello', 'formello' ), $capability, $slug, [ $this, 'plugin_page' ], 'dashicons-text' );

        if ( current_user_can( $capability ) ) {
            $submenu[ $slug ][] = array( __( 'All Forms', 'formello' ), $capability, 'admin.php?page=' . $slug . '#/' );
            $submenu[ $slug ][] = array( __( 'New Form', 'formello' ), $capability, 'admin.php?page=' . $slug . '#/new' );
            $submenu[ $slug ][] = array( __( 'Submissions', 'formello' ), $capability, 'admin.php?page=' . $slug . '#/submissions' );
            $submenu[ $slug ][] = array( __( 'Integrations', 'formello' ), $capability, 'admin.php?page=' . $slug . '#/integrations' );
            $submenu[ $slug ][] = array( __( 'Settings', 'formello' ), $capability, 'admin.php?page=' . $slug . '#/settings' );
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
        wp_dequeue_style( 'forms-css' );
        wp_enqueue_style( 'formello-icons' );
        wp_enqueue_style( 'formello-vendors' );
        wp_enqueue_style( 'formello-admin' );
        wp_enqueue_script( 'formello-admin' );
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page() {
        echo '<div class="wrap"><div id="formello-app"></div></div>';
    }

}
