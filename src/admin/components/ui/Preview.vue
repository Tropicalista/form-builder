<template>
  <div>
    <iframe width="100%" :src="'http://localhost/affiliateblog?formello_preview_form=' + id" frameborder="0"></iframe>
  </div>
</template>

<script>

export default {
  name: 'Preview',
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
  },
};
</script>
<style>
  iframe {
    height: 600px !important;
  }
</style>