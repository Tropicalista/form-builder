<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item">
      <md-card>
        <md-card-content>
          <md-button class="md-raised md-primary" @click.prevent="add({type:'actions-panel'})">Add action</md-button>
          <div class="formello-wrapper" v-for="a in actions">
            <h3>{{a.settings.name}} [{{a.label}}]
              <md-button class="md-icon-button md-raised md-minions md-primary" @click="add(a)">
                <md-icon>edit</md-icon>
              </md-button>
              <md-button class="md-icon-button md-raised md-minions md-accent" @click="remove(a)">
                <md-icon>delete</md-icon>
              </md-button>
            </h3>
          </div>
        </md-card-content>
      </md-card>      
    </div>

    <md-drawer :md-active.sync="show" class="md-right">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button md-dense" @click="show = false">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </div>

      <md-content>
        <component :is="panel.type" :settings="panel.settings" :id="panel.id"></component>
      </md-content>

    </md-drawer>
  </div>

</template>

<script>
import ActionsPanel from "admin/components/actions/ActionsPanel.vue"
import Mailchimp from "admin/components/actions/Mailchimp.vue"
import Email from "admin/components/actions/Email.vue"
import { EventBus } from 'admin/utils/eventBus.js'

export default {
  name: 'Actions',
  data () {
    return {
      show: false,
      actions: this.$store.state.settings.actions,
      panel: '',
    }
  },
  methods: {
    remove(action) {
      this.$store.commit( 'deleteAction', action )
    },
    add(panel) {
      console.log(panel)
      this.panel = panel
      this.show = true
    }
  },
  created() {
    EventBus.$on('addAction', (data) => {
      this.$store.commit( 'addAction', data )
    })
  },
  components: {
    ActionsPanel,
    Email,
    Mailchimp
  }
};
</script>
<style type="text/css">
  .md-minions .md-icon {
    font-size: 16px !important;
  }
</style>