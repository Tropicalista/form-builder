<template>
  <div id="vue-backend-app">
    <router-view />
  </div>
</template>

<script>
import { EventBus } from 'admin/utils/eventBus.js';
export default {
  name: 'App'
}
</script>
