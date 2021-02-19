<template>
	<div>
		<label :for="field.name" :class="field.class.label" v-if="showLabel">{{field.label}}</label>
		<div class="g-recaptcha" :data-sitekey="$store.state.settings.recaptcha_site_key" data-callback="enableBtn" v-if="showReCaptcha"></div>
		<input v-bind="field.attrs" :class="field.class.input" />
    <img :src="$root.spinner" v-if="showSpinner" class="spinner-hide" id="formello-spinner" />
		<p v-if="field.attrs.type == 'file'"></p>
		<p v-if="field.message" :class="field.class.message">{{field.message}}</p>
	</div>
</template>

<script>
import mixin from 'admin/components/options/mixin'
export default {
  name: 'Input',
  props: ['field'],
  mixins: [mixin],
  computed: {
    showSpinner (){
      return this.field.attrs.type == 'submit'
    },
    showLabel (){
      return this.field.label && this.field.attrs.type != 'hidden' && this.field.attrs.type != 'submit'
    },
  	showReCaptcha(){
  		return this.field.attrs.type == 'submit' 
            && this.$store.state.settings.recaptcha_version == 1 
            && this.$store.state.settings.recaptcha_enabled
  	}
  },
  created(){
  	/*if( this.$store.state.settings.recaptcha_enabled 
        && this.field.attrs.type == 'submit' 
        && this.$store.state.settings.recaptcha_version > 1 ){
  		this.onChange( this.$store.state.config.recaptcha.site_key, 'data-sitekey', 'attrs' )
  		this.onChange( 'enableBtn', 'data-callback', 'attrs' )
  		this.onChange( 'g-recaptcha', 'input', 'class' )
  	}*/
  }
}
</script>