<template>
  <div class="settings">

    <md-card>
      
      <h1>Settings</h1>
      
      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <label>Success message</label>
        </div>
        <div class="md-layout-item">
          <textarea class="regular-text" :value="$store.state.settings.success_message" @input="onChangeSettings($event.target.value, 'success_message')"></textarea>
        </div>
      </div>
      
      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <label>Redirect url</label>
        </div>
        <div class="md-layout-item">
          <input type="text" :value="$store.state.settings.redirect_url" @input="onChangeSettings($event.target.value, 'redirect_url')" class="regular-text">
        </div>
      </div>
      
      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <label>Loading text</label>
        </div>
        <div class="md-layout-item">
          <input type="text" :value="$store.state.settings.loading_text" @input="onChangeSettings($event.target.value, 'loading_text')" class="regular-text">
        </div>
      </div>
      
      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <label>Hide form after submit?</label>
        </div>
        <div class="md-layout-item">
          <input type="checkbox" :checked="$store.state.settings.hide_form" @input="onChangeSettings($event.target.checked, 'hide_form')">
        </div>
      </div>

      <div class="formello-setting-row md-layout md-gutter">
        <div class="md-layout-item md-size-15">
          <label>Store submissions?</label>
        </div>
        <div class="md-layout-item">
          <input type="checkbox" :checked="$store.state.settings.store_submissions" @input="onChangeSettings($event.target.checked, 'store_submissions')">
        </div>
      </div>

    </md-card>

  </div>
</template>

<script>

export default {
  name: 'Advanced',
  methods: {
    onChange( groupIndex, key, value ) {
      this.$store.commit('updateMessage', { group: groupIndex, key: key, value: value })
    },
    onChangeSettings( value, key ) {
      this.$store.commit('updateFormSettings', { key: key, value: value })
    },
  },
}
</script>
<style>

</style>