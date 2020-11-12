<template>
  <div id="vue-backend-app">
    <router-view />
  </div>
</template>

<script>
import Loader from 'admin/components/ui/Loader.vue'
export default {
  name: 'App',
  components: {
  	Loader
  }
}
</script>