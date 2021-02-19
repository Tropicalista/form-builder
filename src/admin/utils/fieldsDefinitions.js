const defaultOpts = {
    wrapper: 'div',
	attrs: {
		required: false,
		type: 'text',
		name: '',
		value: ''
	},
	class: {},
	settings: {
		base: true,
		display: true,
		options: false,
		style: true,
		display: true,
		range: false,
		recaptcha: false,
		disabledInput: ['accept', 'multiple', 'maxFileSize', 'maxFileNumber', 'min', 'max', 'step'],
	}, 
	options: [
		{ label: "Apple", value: 'apple', is_required: false, id: 1 },
		{ label: "Coconut", value: 'coconut', is_required: false, id: 2 },
		{ label: "Pineapple", value: 'pineapple', is_required: false, id: 3 }
	]
}
export default [
	{
		component: 'Input',
		message: '',
		attrs: {
			...defaultOpts.attrs,
			type: 'text',
			placeholder: '',
			name: '',
			value: '',
		},
		label: 'Input Text',
		settings: defaultOpts.settings,
		class: defaultOpts.class
	},
	{
		component: 'Input',
		label: 'Email',
		attrs: {
			...defaultOpts.attrs,
			type: 'email',
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: ['maxLength','minLength'],
		},
		class: defaultOpts.class
	},
	{
		type: 'hidden',
		component: 'Input',
		label: 'Hidden',
		attrs: {
			...defaultOpts.attrs,
			type: 'hidden',
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: ['label','message', 'required', 'placeholder'],
			display: true,
			style: false
		},
		class: defaultOpts.class
	},
	{
		component: 'Input',
		label: 'Submit',
		attrs: {
			...defaultOpts.attrs,
			type: 'submit',
			value: 'Submit',
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: ['label','message', 'required', 'placeholder', 'name'],
			display: true,
			style: false
		},
		class: defaultOpts.class
	},
	{
		component: 'Button',
		label: 'Button',
		attrs: {
			...defaultOpts.attrs,
			type: 'submit',
			value: 'Submit',
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: ['label','message', 'required', 'placeholder', 'name'],
			display: true,
			style: false
		},
		class: defaultOpts.class
	},
	{
		component: 'Input',
		label: 'URL',
		attrs: {
			...defaultOpts.attrs,
			type: 'url',
		},
		settings: defaultOpts.settings,
		class: defaultOpts.class
	},
	{
		type: 'date',
		component: 'Input',
		label: 'Date',
		attrs: {
			...defaultOpts.attrs,
			type: 'date',
		},
		settings: defaultOpts.settings,
		class: defaultOpts.class
	},
	{
		type: 'tel',
		component: 'Input',
		label: 'Tel',
		attrs: {
			...defaultOpts.attrs,
			type: 'tel',
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: ['accept', 'multiple', 'maxFileSize', 'maxFileNumber', 'min', 'max', 'step'],
			range: true,
			display: true,
			style: true
		},
		class: defaultOpts.class
	},
	{
		type: 'file',
		component: 'Input',
		label: 'File',
		maxFileSize: 100,
		attrs: {
			type: 'file',
			multiple: false,
			accept: 'jpg, png, gif',
			name: ''
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: ['value', 'placeholder'],
			range: true,
			display: true,
			style: true
		},
		class: defaultOpts.class
	},
	{
		component: 'Input',
		label: 'Number',
		attrs: {
			...defaultOpts.attrs,
			type: 'number',
			min: 0,
			max: 10,
			step: 1
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: [ 'maxLength', 'minLength', 'accept', 'multiple', 'maxFileSize', 'maxFileNumber'],
			range: true
		},
		class: defaultOpts.class
	},
	{
		tag: 'input',
		component: 'Input',
		label: 'Range',
		attrs: {
			...defaultOpts.attrs,
			type: 'range',
			min: 0,
			max: 10,
			step: 1
		},
		settings: {
			...defaultOpts.settings,
			disabledInput: ['accept','minLength', 'maxLength', 'placeholder', 'multiple'],
			range: true
		},
		class: defaultOpts.class
	},
	{
		component: 'Select',
		label: 'Select',
		attrs: {
			...defaultOpts.attrs,
			name: ''
		},
		options: [...defaultOpts.options],
		settings: {
			...defaultOpts.settings,
			base: true,
			options: true,
			disabledInput: ['placeholder']
		},
		class: defaultOpts.class
	},
	{
		type: 'select',
		component: 'Select',
		label: 'Multiple Select',
		attrs: {
			...defaultOpts.attrs,
			name: '',
			multiple: true
		},
		options: [...defaultOpts.options],
		settings: {
			...defaultOpts.settings,
			base: true,
			options: true,
			disabledInput: ['label','placeholder']
		},
		class: defaultOpts.class
	},
	{
		type: 'checkbox',
		component: 'Checkbox',
		label: 'Checkbox',
		attrs: {
			name: '',
			type: 'checkbox'
		},
		options: [...defaultOpts.options],
		settings: {
			...defaultOpts.settings,
			base: true,
			options: true,
			disabledInput: ['label','placeholder','required'],
			display: false
		},
		class: defaultOpts.class
	},
	{
		type: 'radio',		
		component: 'Checkbox',
		label: 'Radio list',
		attrs: {
			name: '',
			type: 'radio'
		},
		options: [...defaultOpts.options],
		settings: {
			...defaultOpts.settings,
			base: true,
			options: true,
			disabledInput: ['label','placeholder']
		},
		class: defaultOpts.class
	},
	{
		type: 'textarea',
		component: 'Textarea',
		label: 'Textarea',
		attrs: {
			...defaultOpts.attrs,
			name: ''
		},
		settings: defaultOpts.settings,
		class: defaultOpts.class
	},
	{
		type: 'recaptcha',
		component: 'ReCaptcha',
		label: 'ReCaptcha',
		attrs: {

		},
		settings: {
			base: false,
			display: false,
			options: false,
			style: false,
			display: false,
			range: false,
			recaptcha: true
		},
	},
]
