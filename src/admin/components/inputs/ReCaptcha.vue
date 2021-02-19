<template>
	<div>
    <div id='recaptcha' class="g-recaptcha"
      :data-sitekey="$store.state.settings.recaptcha_site_key"
      data-callback="enableBtn"
      :data-size="invisible"></div>
	</div>
</template>

<script>
import mixin from 'admin/components/options/mixin'
export default {
  name: 'ReCaptcha',
  props: ['field'],
  mixins: [mixin],
  computed: {
  	invisible(){
  		return this.$store.state.settings.recaptcha_version > 1 ? 'invisible' : ''
  	}
  },
  created(){
  	if( this.$store.state.settings.recaptcha_enabled 
        && this.field.attrs.type == 'submit' 
        && this.$store.state.settings.recaptcha_version > 1 ){
  		this.onChange( this.$store.state.config.recaptcha.site_key, 'data-sitekey', 'attrs' )
  		this.onChange( 'enableBtn', 'data-callback', 'attrs' )
  		this.onChange( 'g-recaptcha', 'input', 'class' )
  	}
  }
}
</script>