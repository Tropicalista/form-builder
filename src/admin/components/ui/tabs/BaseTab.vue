<template>
  <div>

      <h1>Default settings</h1>

      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <md-checkbox v-model="load_stylesheet" class="md-primary">Load StyleSheet</md-checkbox>
        </div>
      </div>

      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <md-checkbox v-model="store_submissions" class="md-primary">Store Submissions</md-checkbox>
        </div>
      </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'BaseSettings',
  computed: {
    load_stylesheet: {
      get () {
        return this.$store.state.config.load_stylesheet
      },
      set (value) {
        this.$store.commit('updateConfig', { key: 'load_stylesheet', value: value })
      }
    },
    store_submissions: {
      get () {
        return this.$store.state.config.storeSubmissions
      },
      set (value) {
        this.$store.commit('updateConfig', { key: 'store_submissions', value: value })
      }
    },
  },
}
</script>
<style>

</style>