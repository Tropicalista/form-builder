<?php

namespace App;

class Form {

	public $ID       = 0;
	public $title    = '';
	public $slug     = '';
	public $markup   = '';
	public $messages = array();
	public $validation = array();
	public $settings = array();

	/**
	 * Form constructor.
	 *
	 * @param $id
	 */
	public function __construct( $id ) {
		$this->ID = $id;
	}

	/**
	* Magic method for accessing unexisting properties, eg lowercase "id".
	* @param string $property
	* @return mixed
	*/
	public function __get( $property ) {
		if ( $property === 'id' ) {
			return $this->ID;
		}
	}

	public function get_html() {
		$form = $this;

		/**
		 * Filters the CSS classes to be added to this form's class attribute.
		 *
		 * @param array $form_classes
		 * @param Form $form
		 */
		$form_classes_attr = apply_filters( 'formello_form_element_class_attr', '', $form );

		//$form_action = admin_url('admin-ajax.php');

		/**
		 * Filters the action attribute for this form.
		 *
		 * @param string $form_action
		 * @param Form $form
		 */
		$form_action      = apply_filters( 'formello_form_element_action_attr', null, $form );

		$form_action_attr = is_null( $form_action ) ? '' : sprintf( 'action="%s"', $form_action );

		$data_attributes = $this->get_data_attributes();

		$html  = '';
		$html .= sprintf( '<!-- Formello Forms v%s - %s -->', FORMELLO_VERSION, 'https://wordpress.org/plugins/formello/' );
		$html .= sprintf( '<form method="post" id="formello-%d" %s class="formello formello-form %s" %s>', $this->ID, $form_action_attr, esc_attr( $form_classes_attr ), $data_attributes );
		//$html .= wp_nonce_field( 'formello' );
		$html .= sprintf( '<input type="hidden" name="action" value="formello" />' );
		$html .= sprintf( '<input type="hidden" name="_formello_form_id" value="%d" />', $this->ID );
		$html .= sprintf( '<div style="display: none;"><input type="text" name="_formello_h%d" value="" /></div>', $this->ID );
		$html .= '<div class="formello-fields-wrap">';
		$html .= $this->get_markup();
		$html .= '<noscript>' . __( 'Please enable JavaScript for this form to work.', 'formello' ) . '</noscript>';
		$html .= '</div>'; // end field wrap
		$html .= '</form>';
		$html .= '<!-- / Formello Forms -->';

		// ensure JS script is enqueued whenever this function is called
		if ( function_exists( 'wp_enqueue_script' ) ) {
			wp_enqueue_script( 'formello-frontend' );
		}

		/**
		 * Filters the resulting HTML for this form.
		 *
		 * @param string $html
		 * @param Form $form
		 */
		$html = apply_filters( 'formello_form_html', $html, $form );
		return $html;
	}

	public function get_data_attributes() {
		$form       = $this;
		$attributes = array(
			'id'    => $this->ID,
			'title' => $this->title,
			'slug'  => $this->slug,
		);

		/**
		 * Filters the data attributes to be added to the form attribute.
		 *
		 * @param array $attributes
		 * @param Form $form
		 */
		$attributes = apply_filters( 'formello_form_element_data_attributes', $attributes, $form );

		// create string of attribute key-value pairs
		$string = '';
		foreach ( $attributes as $attr => $value ) {
			// prefix all attributes with data-
			if ( substr( $attr, 0, 5 ) !== 'data-' ) {
				$attr = 'data-' . $attr;
			}

			$string .= sprintf( '%s="%s" ', $attr, esc_attr( $value ) );
		}
		$string = rtrim( $string, ' ' );

		return $string;
	}


	/**
	 * @return string
	 */
	public function __toString() {
		return $this->get_html();
	}

	/**
	* @return string
	*/
	public function get_markup() {
		return apply_filters( 'formello_form_markup', $this->markup );
	}

	/**
	* @param string $code
	* @return string
	*/
	public function get_message( $code ) {
		$form    = $this;
		$message = isset( $this->messages[ $code ] ) ? $this->messages[ $code ] : '';

		/**
		* @param string $message
		* @param Form $form
		*/
		$message = apply_filters( 'formello_form_message_' . $code, $message, $form );
		return $message;
	}

	/**
	* @return int The number of named fields in the form
	*/
	public function get_field_count() {
		$count = substr_count( strtolower( $this->get_html() ), ' name=' );
		$count++; // Add one for 'was-required'
		return $count;
	}
}
