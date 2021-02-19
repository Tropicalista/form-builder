<template>
	<div>
		<button :class="field.class.input">{{field.attrs.value}}<img :src="$root.spinner" id="formello-spinner" /></button>
		<p v-if="field.message" :class="field.class.message">{{field.message}}</p>
	</div>
</template>

<script>
import mixin from 'admin/components/options/mixin'
export default {
  name: 'Button',
  props: ['field'],
  mixins: [mixin],
}
</script>