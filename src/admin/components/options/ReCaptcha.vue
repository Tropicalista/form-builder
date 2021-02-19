<template>
  <fieldset class="formello">
    <legend>ReCaptcha settings:</legend>
    <div class="form-group">
      <label><input type="radio" v-model="version" :value="1">Google Recaptcha V2 Checkbox</label>
      <label><input type="radio" v-model="version" :value="2">Google Recaptcha V2 Invisible</label>
      <label><input type="radio" v-model="version" :value="3">Google Recaptcha V3</label>
      <p class="description">Choose the ReCaptcha version</p>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: 'RecaptchaSettings',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    version: {
      get () {
        return this.$store.state.settings.recaptcha_version
      },
      set (value) {
        this.$store.commit('updateFormSettings', { key: 'recaptcha_version', value: value })
      }
    },
  }
};
</script>