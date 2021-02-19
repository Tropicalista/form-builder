<template>
	<div>
		<label>{{field.label}}</label>
	  <label v-for="( o, index ) in field.options">
	  	<input :type="field.type" :name="field.attrs.type == 'checkbox' ? field.attrs.name + '[]' : field.attrs.name" :value="o.value" :checked="o.selected" :required="o.required" /> {{o.label ? o.label : o.prettyName}}
	  </label>
		<p v-if="field.message" :class="field.class.message">{{field.message}}</p>
	</div>

</template>

<script>
import opts from "admin/utils/defaultOpts.js"
export default {
  name: 'Checkbox',
  props: ['field'],
}
</script>