<template>
	<div>
		<label v-if="field.label && field.attrs.type != 'hidden' && field.attrs.type != 'submit'" :for="field.name" :class="field.class.label">{{field.label}}</label>
	  	<textarea v-bind="field.attrs" :class="field.class.input"></textarea>		
		<p v-if="field.message" :class="field.class.message">{{field.message}}</p>
	</div>

</template>

<script>
export default {
  name: 'Textarea',
  props: ['field']
};
</script>