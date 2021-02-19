<?php

namespace App\Actions;

use App\Form;
use App\Submission;

class MailChimp extends Action {

	public $type  = 'mailchimp';
	public $label = 'Mailchimp API';

	public function __construct() {
		$this->label = __( 'MailChimp', 'formello' );
		$this->settings = $this->get_default_settings();
	}

	/**
	* @return array
	*/
	private function get_default_settings() {
		$defaults = array(
			'name' => '',
			'api' => '',
		);
		return $defaults;
	}

	/**
	* @param array $settings
	* @param string|int $index
	*/
	public function page_settings( $settings, $index ) {
	}

	/**
	 * Processes this action
	 *
	 * @param array $settings
	 * @param Submission $submission
	 * @param Form $form
	 */
	public function process( array $settings, Submission $submission, Form $form ) {
		if ( empty( $settings['to'] ) || empty( $settings['message'] ) ) {
			return false;
		}

		$settings   = array_merge( $this->get_default_settings(), $settings );
		$html_email = $settings['content_type'] === 'text/html';

		$to      = apply_filters( 'formello_action_email_to', formello_replace_data_variables( $settings['to'], $submission->data, 'strip_tags' ), $submission );
		$subject = ! empty( $settings['subject'] ) ? formello_replace_data_variables( $settings['subject'], $submission->data, 'strip_tags' ) : '';
		$subject = apply_filters( 'formello_action_email_subject', $subject, $submission );
		$message = apply_filters( 'formello_action_email_message', formello_replace_data_variables( $settings['message'], $submission->data, $html_email ? 'esc_html' : null ), $submission );

		// parse additional email headers from settings
		$headers = array();
		if ( ! empty( $settings['headers'] ) ) {
			$headers = explode( PHP_EOL, formello_replace_data_variables( $settings['headers'], $submission->data, 'strip_tags' ) );
		}

		$content_type = $html_email ? 'text/html' : 'text/plain';
		$charset      = get_bloginfo( 'charset' );
		$headers[]    = sprintf( 'Content-Type: %s; charset=%s', $content_type, $charset );

		if ( ! empty( $settings['from'] ) ) {
			$from      = apply_filters( 'formello_action_email_from', formello_replace_data_variables( $settings['from'], $submission->data, 'strip_tags' ), $submission );
			$headers[] = sprintf( 'From: %s', $from );
		}

		return wp_mail( $to, $subject, $message, $headers );
	}

}
