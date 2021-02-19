<template>
	<div>
		<label :for="field.attrs.name" :class="field.class.label" v-if="field.label">{{field.label}}</label>
	  <select v-bind="field.attrs" :class="field.class.input">
	    <option v-for="(o, index ) in field.options" v-bind="o">{{o.label}}</option>
	  </select>		
		<p v-if="field.message" :class="field.class.message">{{field.message}}</p>
	</div>
</template>

<script>
import opts from "admin/utils/defaultOpts.js"
export default {
  name: 'Select',
  props: ['field'],
};
</script>