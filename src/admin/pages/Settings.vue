<template>
  <div class="settings">
    <md-tabs>
      <md-tab id="tab-home" md-label="Settings" @click="selectedTab = 'base-tab'"></md-tab>
      <md-tab id="tab-pages" md-label="Messages" @click="selectedTab = 'validation-tab'"></md-tab>
      <md-tab id="tab-posts" md-label="Recaptcha" @click="selectedTab = 're-captcha'"></md-tab>
    </md-tabs>
    
    <md-card>
      <component :is="selectedTab" />

      <md-button class="md-raised md-primary" @click.prevent="save">Save settings</md-button>

    </md-card>


  </div>
</template>

<script>

import BaseTab from 'admin/components/ui/tabs/BaseTab.vue'
import ValidationTab from 'admin/components/ui/tabs/ValidationTab.vue'
import ReCaptcha from 'admin/components/ui/tabs/ReCaptcha.vue'

export default {
  name: 'Settings',
  data: () => ({
    active: false,
    selectedTab: 'base-tab',
  }),
  methods: {
    onChange(e,k) {
      this.validation[k] = e
    },
    save() {
      axios.post( 'settings/update', {
        settings: this.$store.state.config
      } )
        .then( response => {
          this.$root.showSnackbar = true
          this.$root.snackBarMessage = "Updated correctly"      
        })
    },
  },
  created() {
  },
  components: {
    ValidationTab,
    BaseTab,
    ReCaptcha
  }
}
</script>
<style>
.formello-setting-row {
    border-bottom: 1px solid #e4e4e4;
    padding: 30px 0;
    font-size: 14px;
    line-height: 1.3;
    text-transform: capitalize;
}
.settings h1 {
  text-transform: capitalize;
}
</style>