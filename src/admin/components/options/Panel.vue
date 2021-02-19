<template>
  <div>
    <base-settings :field="field" v-if="field.settings.base" />
    <display-settings :field="field" v-if="field.settings.display" />
    <range-settings :field="field" v-if="field.settings.range" />
    <options-settings :field="field" v-if="field.settings.options" />
    <style-settings :field="field" v-if="field.settings.style" />
    <recaptcha-settings :field="field" v-if="field.settings.recaptcha" />
  </div>
</template>

<script>
import { EventBus } from 'admin/utils/eventBus.js';
import BaseSettings from "./Base.vue";
import RangeSettings from "./Range.vue";
import OptionsSettings from "./Options.vue";
import DisplaySettings from "./Display.vue";
import StyleSettings from "./Style.vue";
import RecaptchaSettings from "./ReCaptcha.vue";
import defaultOpts from "admin/utils/defaultOpts.js"

export default {
  name: 'Panel',
  data () {
    return {
      field: {
        attrs: {
          name: '',
        },
        label: '',
        class: {
          label: ''
        },
        options: {},
        settings: {
          base: false,
          display: false,
          options: false,
          range: false,
          style: false,
          disabledInput: []
        }
      }
    }
  },
  methods: {

  },
  created() {
    EventBus.$on('togglePanel', (data) => {
      // this works correctly
      //this.field = Object.assign({}, this.field, data)


      // some attempt to use strict
      this.field = this.$store.getters.getFieldById(data.id)

      //this.field = {...data}
      //this.field = JSON.parse(JSON.stringify(data))
      //console.log(this.field)
    })
  },
  components: {
    DisplaySettings,
    OptionsSettings,
    StyleSettings,
    BaseSettings,
    RangeSettings,
    RecaptchaSettings
  }
};
</script>