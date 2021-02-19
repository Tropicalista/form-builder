<template>
  <div>
    <div
      class="formello-fields"
      v-for="(element, index) in actions"
      @click="add(element)"
      :key="index"
    >
      {{index}}
    </div>    
  </div>
</template>

<script>
import { EventBus } from 'admin/utils/eventBus.js';
export default {
  name: 'ActionsPanel',
  data () {
    return {
      actions: this.$store.state.config.actions
    }
  },
  methods: {
    add(elm) {
      EventBus.$emit('addAction', elm)
    },    
  },
};
</script>