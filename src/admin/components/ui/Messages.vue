<template>
  <div class="settings">

    <md-card>
      
      <div v-for="(v, groupIndex) in $store.state.settings.validation.messages">
        <h1>{{groupIndex.split(/(?=[A-Z])/).join(" ")}}</h1>
        <div v-for="(m,index) in v">
          <form-settings :label="index" :value="m" class="formello-setting-row" :key="index" @input="onChange( groupIndex, index, $event )" />
        </div>
      </div>

    </md-card>

  </div>
</template>

<script>
import FormSettings from 'admin/components/ui/tabs/FormSettings.vue'

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
  created() {

  },
  components: {
    FormSettings
  }
}
</script>
<style>

</style>