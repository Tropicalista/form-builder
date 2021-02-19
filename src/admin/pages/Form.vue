<template>
  <div class="md-layout-item">

    <md-toolbar class="md-white">
      <h3 class="md-title"><span contenteditable
      class="editme uk-margin-right"
      v-text="daForm.post_title"
      @blur="onEdit" @keydown.enter="endEdit"></span>
      </h3>
      <div class="md-toolbar-section-end">
        <input type="text" readonly :value="'[formello id=' + daForm.ID + ']'" />
        <md-button class="md-raised md-primary" @click.prevent="update()">Save</md-button>
      </div>

    </md-toolbar>

    <md-tabs>
      <md-tab id="tab-home" md-label="Form" @click="selectedTab = 'form-edit'"></md-tab>
      <md-tab id="tab-pages" md-label="Actions" @click="selectedTab = 'actions'"></md-tab>
      <md-tab id="tab-settings" md-label="Settings" @click="selectedTab = 'settings'"></md-tab>
      <md-tab id="tab-messages" md-label="Messages" @click="selectedTab = 'messages'"></md-tab>
      <md-tab id="tab-posts" md-label="Preview" @click="selectedTab = 'preview'"></md-tab>
    </md-tabs>

    <keep-alive>
      <component :is="selectedTab" ref="tab"></component>
    </keep-alive>

    <md-drawer :md-active.sync="show" class="md-right md-scrollbar">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button md-dense" @click="show = false">
          <md-icon>keyboard_arrow_right</md-icon>
        </md-button>
      </div>

      <md-content>
        <panel />
      </md-content>
    </md-drawer>

  </div>
</template>

<script>
import fieldDefs from 'admin/utils/fieldsDefinitions.js';
import { EventBus } from 'admin/utils/eventBus.js';

import AbstractInput from 'admin/components/inputs/AbstractInput.vue'
import FieldList from 'admin/components/ui/FieldList.vue'
import FormArea from 'admin/components/ui/FormArea.vue'
import FormEdit from 'admin/components/ui/FormEdit.vue'
import Preview from 'admin/components/ui/Preview.vue'
import Actions from 'admin/components/ui/Actions.vue'
import Settings from 'admin/components/ui/Settings.vue'
import Messages from 'admin/components/ui/Messages.vue'
import Panel from "admin/components/options/Panel.vue";

export default {
  name: 'Form',
  data () {
    return {
      selectedTab: 'form-edit',
      daForm: {},
      showSpinner: false,
      show: false
    };
  },
  methods: {
    onEdit(evt){
      let src = evt.target.innerText
      this.daForm.post_title = src
    },
    endEdit(){
      this.$el.querySelector('.editme').blur()
    },
    togglePanel(input) {
      EventBus.$emit('togglePanel', input)
      this.show = true
    },
    update() {
      EventBus.$emit('showHtml', this.daForm)
    },
  },
  created() {
    EventBus.$on('togglePanel', (data) => {
      this.show = true
    })
  },
  beforeRouteEnter (to, from, next) {
    axios.get( 'form/' + to.params.id )
      .then( response => {
        next(vm => { 
          vm.daForm = response.data 
          vm.$store.dispatch("updateFields", response.data.settings.fields)
          vm.$store.commit("setSettings", response.data.settings.settings)
        } )
      })
  },
  components: {
    FieldList,
    Preview,
    FormArea,
    FormEdit,
    Panel,
    AbstractInput,
    Actions,
    Messages,
    Settings
  }
}
</script>

<style>
.formello .uk-offcanvas-bar {
    width: 50%;
    padding: 40px 40px;
    top: 30px;
}
.md-no-animation {
    transition: none;
}
.md-tabs.md-theme-default .md-tabs-navigation {
  background: none !important;
  margin-bottom: 1em;
}
.editme:focus {
  background: white;
  border: 1px solid #dedede;
  outline-width: 0px;
}
.md-toolbar.md-theme-default.md-white {
  background-color: #fff;
}
</style>
