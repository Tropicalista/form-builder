<template>
  <div>

      <h1>Validation Messages</h1>

      <p>These messages are displayed to the users as they fill out a form in real-time.</p>

      <div v-for="(v, groupIndex) in $store.state.config.validation_messages">
        <h1>{{groupIndex.split(/(?=[A-Z])/).join(" ")}}</h1>
        <div v-for="(m,index) in v">
          <form-settings :label="index" :value="m" class="formello-setting-row" :key="index" @input="onChange( groupIndex, index, $event )" />
        </div>
      </div>


  </div>
</template>

<script>
import FormSettings from 'admin/components/ui/tabs/FormSettings.vue'

export default {
  name: 'BaseSettings',
  methods: {
    onChange( group, key, value ) {
      this.$store.commit('updateConfigMsg', { key: key, value: value, group: group })
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