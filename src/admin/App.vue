<template>
  <div id="vue-backend-app">
    <h1>Backend App</h1>
    <router-view />
  </div>
</template>

<script>
import { EventBus } from 'admin/utils/eventBus.js';
export default {
  name: 'App'
}
</script>
