<template>
  <div>

      <h1>ReCaptcha settings</h1>

      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <md-checkbox v-model="enabled" class="md-primary">Enable ReCaptcha</md-checkbox>
        </div>
      </div>

      <div v-show="enabled">
        
        <div class="formello-setting-row md-layout md-gutter">
          <div class="md-layout-item">
            <md-radio v-model="version" :value="1" class="md-primary">
              Google recaptcha v2 checkbox
            </md-radio>
            <md-radio v-model="version" :value="2" class="md-primary">
              Google recaptcha v2 invisible
            </md-radio>
            <md-radio v-model="version" :value="3" class="md-primary">
              Google recaptcha v3
            </md-radio>
          </div>
        </div>

        <div class="formello-setting-row md-layout md-gutter">
          <div class="md-layout-item md-size-15">
            <label>Site Key</label>
          </div>
          <div class="md-layout-item">
            <input type="text" class="regular-text" v-model="site_key">
          </div>
        </div>

        <div class="formello-setting-row md-layout md-gutter">
          <div class="md-layout-item md-size-15">
            <label>Secret Key</label>
          </div>
          <div class="md-layout-item">
            <input type="text" class="regular-text" v-model="secret_key">
          </div>
        </div>

        <div class="formello-setting-row md-layout md-gutter" v-show="version == 3">
          <div class="md-layout-item md-size-15">
            <label>Threshold</label>
          </div>
          <div class="md-layout-item">
            <input type="text" class="regular-text" v-model="threshold">
          </div>
        </div>

        <div class="formello-setting-row md-layout md-gutter">
          <div class="md-layout-item md-size-15">
            <label>Fail message</label>
          </div>
          <div class="md-layout-item">
            <input type="text" class="regular-text" v-model="message">
          </div>
        </div>

      </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'BaseSettings',
  methods: {
    onChange( value, key ) {
      this.$store.commit('updateConfig', { key: key, value: value })
    },
  },
  computed: {
    version: {
      get () {
        return this.$store.state.config.recaptcha.version
      },
      set (value) {
        this.$store.commit('updateConfigRecaptcha', { key: 'version', value: value })
      }
    },
    enabled: {
      get () {
        return this.$store.state.config.recaptcha.enabled
      },
      set (value) {
        this.$store.commit('updateConfigRecaptcha', { key: 'enabled', value: value })
      }
    },
    site_key: {
      get () {
        return this.$store.state.config.recaptcha.site_key
      },
      set (value) {
        this.$store.commit('updateConfigRecaptcha', { key: 'site_key', value: value })
      }
    },
    secret_key: {
      get () {
        return this.$store.state.config.recaptcha.secret_key
      },
      set (value) {
        this.$store.commit('updateConfigRecaptcha', { key: 'secret_key', value: value })
      }
    },
    threshold: {
      get () {
        return this.$store.state.config.recaptcha.threshold
      },
      set (value) {
        this.$store.commit('updateConfigRecaptcha', { key: 'threshold', value: value })
      }
    },
    message: {
      get () {
        return this.$store.state.config.recaptcha.message
      },
      set (value) {
        this.$store.commit('updateConfigRecaptcha', { key: 'message', value: value })
      }
    }
  }
}
</script>
<style>

</style>