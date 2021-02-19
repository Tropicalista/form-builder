<template>
  <div class="formello-setting-row md-layout md-gutter">

      <div class="md-layout-item md-size-15">
        <b>Mailchimp api key</b>
      </div>
      <div class="md-layout-item">
        <div class="form-group">
          <input type="text" class="regular-text" :value="config.api" @input="onChange($event.target.value, 'api')">
        </div>          
      </div>

  </div>
</template>

<script>
export default {
  name: 'Mailchimp',
  props: ['config','type'],
  data () {
    return {
      //config: this.settings.settings
    }
  },
  methods: {
    onChange(value, key){
      this.$store.commit('editIntegration', {
        type: this.type,
        settings: {
          [key]: value
        }
      })
    }
  },
};
</script>