<?php

namespace App\Actions;

use App\Form;
use App\Submission;

abstract class Action {

	public $type  = '';
	public $label = '';
	public $settings = [];

	public function hook() {
		add_filter( 'formello_available_form_actions', array( $this, 'register' ) );
		add_action( 'formello_output_form_action_' . $this->type . '_settings', array( $this, 'page_settings' ), 10, 2 );
		add_action( 'formello_process_form_action_' . $this->type, array( $this, 'process' ), 10, 3 );
	}

	/**
	 * Renders the settings for this action.
	 *
	 * @param array $settings
	 * @param string $index
	 */
	abstract function page_settings( $settings, $index );

	abstract function process( array $settings, Submission $submission, Form $form );

	/**
	 * @param array $actions
	 * @return array
	 */
	public function register( array $actions ) {
		$actions[ $this->type ] = [
			'label' 		=> $this->label,
			'type'		=> $this->type,
			'settings' 	=> $this->settings,
		];
		return $actions;
	}
}
