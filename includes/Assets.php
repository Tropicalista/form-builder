<?php
namespace App;

/**
 * Scripts and Styles Class
 */
class Assets {

    function __construct() {

        if ( is_admin() ) {
            add_action( 'admin_enqueue_scripts', [ $this, 'register' ], 5 );
        } else {
            add_action( 'wp_enqueue_scripts', [ $this, 'register' ], 5 );
        }
    }

    /**
     * Register our app scripts and styles
     *
     * @return void
     */
    public function register() {
        $this->register_scripts( $this->get_scripts() );
        $this->register_styles( $this->get_styles() );
    }

    /**
     * Register scripts
     *
     * @param  array $scripts
     *
     * @return void
     */
    private function register_scripts( $scripts ) {
        foreach ( $scripts as $handle => $script ) {
            $deps      = isset( $script['deps'] ) ? $script['deps'] : false;
            $in_footer = isset( $script['in_footer'] ) ? $script['in_footer'] : false;
            $version   = isset( $script['version'] ) ? $script['version'] : FORMELLO_VERSION;

            wp_register_script( $handle, $script['src'], $deps, $version, $in_footer );
        }
        wp_localize_script( 'formello-admin', 'formello_var', array(
            'formello_url'  => FORMELLO_URL,
            'nonce'         => wp_create_nonce('wp_rest'),
            'baseurl'       => get_rest_url() . 'formello/v1/'
        ));
    }

    /**
     * Register styles
     *
     * @param  array $styles
     *
     * @return void
     */
    public function register_styles( $styles ) {
        foreach ( $styles as $handle => $style ) {
            $deps = isset( $style['deps'] ) ? $style['deps'] : false;

            wp_register_style( $handle, $style['src'], $deps, FORMELLO_VERSION );
        }
    }

    /**
     * Get all registered scripts
     *
     * @return array
     */
    public function get_scripts() {
        $prefix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '.min' : '';

        $scripts = [
            'flatpickr' => [
                'src'       => 'https://cdn.jsdelivr.net/npm/flatpickr'
            ],
            /*'formello-runtime' => [
                'src'       => FORMELLO_ASSETS . '/js/runtime~admin.js',
                'version'   => filemtime( FORMELLO_PATH . '/assets/js/runtime~admin.js' ),
                'in_footer' => true
            ],
            'formello-runtime-frontend' => [
                'src'       => FORMELLO_ASSETS . '/js/runtime~frontend.js',
                'version'   => filemtime( FORMELLO_PATH . '/assets/js/runtime~frontend.js' ),
                'in_footer' => true
            ],*/
            'formello-vendor' => [
                'src'       => FORMELLO_ASSETS . '/js/vendors.js',
                'version'   => filemtime( FORMELLO_PATH . '/assets/js/vendors.js' ),
                'in_footer' => true
            ],
            'formello-frontend' => [
                'src'       => FORMELLO_ASSETS . '/js/frontend.js',
                'deps'      => [],
                'version'   => filemtime( FORMELLO_PATH . '/assets/js/frontend.js' ),
                'in_footer' => true
            ],
            'formello-admin' => [
                'src'       => FORMELLO_ASSETS . '/js/admin.js',
                'deps'      => [ 'wp-i18n', 'wp-api', 'formello-vendor' ],
                'version'   => filemtime( FORMELLO_PATH . '/assets/js/admin.js' ),
                'in_footer' => true
            ]
        ];

        return $scripts;
    }

    /**
     * Get registered styles
     *
     * @return array
     */
    public function get_styles() {

        $styles = [
            'formello-style' => [
                'src' =>  FORMELLO_ASSETS . '/css/style.css'
            ],
            'formello-frontend' => [
                'src' =>  FORMELLO_ASSETS . '/css/frontend.css'
            ],
            'formello-admin' => [
                'src' =>  FORMELLO_ASSETS . '/css/admin.css'
            ],
            'formello-icons' => [
                'src' =>  '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'
            ],
            'formello-vendors' => [
                'src' =>  FORMELLO_ASSETS . '/css/vendors.css'
            ],
        ];

        return $styles;
    }

}
