<template>
  <div class="">

    <md-card>
      <h1>Integrations</h1>
      <p>Add one or more services.</p>

      <div v-for="(integration, index) in integrations">
        <component v-if="integration.type != 'email'" :is="index" :config="integration.settings" :type="index" />
      </div>
      <md-button class="md-raised md-primary" @click.prevent="save">Save settings</md-button>
    </md-card>

  </div>
</template>

<script>
import mailchimp from 'admin/components/integrations/mailchimp.vue'

export default {
  name: 'Integrations',
  data () {
    return {
      integrations: this.$store.state.config.integrations ? this.$store.state.config.integrations : this.$store.state.config.actions
    }
  },
  methods: {
    save() {
      axios.post( 'settings/update', {
        settings: this.$store.state.config
      } )
        .then( response => {
      
        })
    },
  },
  components: {
    mailchimp
  }
}
</script>
<style>
.mailchimp {
  background: url('../images/mailchimp.png') center center no-repeat;
  background-size: cover;
  height: 100px;
}
</style>