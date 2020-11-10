<template>
  <div class="app-settings">
<button @click="print">cccc</button>
    <page />

  </div>
</template>

<script>
import { EventBus } from 'admin/utils/eventBus.js';

import Page from 'admin/components/tests/Page.vue'
import Panel from "admin/components/options/Panel.vue";

export default {

  name: 'Settings',

  data () {
    return {
    	show: false,
    	form: [],
      g: ''
    };
  },
  methods: {
    togglePanel(input) {
      EventBus.$emit('togglePanel', input)
      this.show = true
    },
    print() {
      EventBus.$emit('showHtml')
    }
  },
  created() {
    EventBus.$on('togglePanel', (data) => {
      this.show = true
    })
    this.$on('hidden', (data) => {
    	console.log("data")
    })
  },
  components: {
    Page
  }
}
</script>
