<template>
  <div class="formello">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="regular-text" :value="settings.name" @input="onChange('name', $event.target.value)">
    </div>
    <div class="form-group">
      <label>List</label>
      <select v-model="selected" @change="onChange('list', selected)">
        <option disabled value="">Select a list</option>
        <option v-for="o in list">{{o.name}}</option>
      </select>
    </div>
    <fieldset>
      <legend>Mapping</legend>
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="regular-text" :value="settings.email" @input="onChange('email', $event.target.value)">
        <merge-tags :action="'changeMailchimp'" :option="'email'"></merge-tags>
      </div>
      <div class="form-group">
        <label>First Name</label>
        <input type="text" class="regular-text" :value="settings.first_name" @input="onChange('first_name', $event.target.value)">
        <merge-tags :action="'changeMailchimp'" :option="'first_name'"></merge-tags>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input type="text" class="regular-text" :value="settings.last_name" @input="onChange('last_name', $event.target.value)">
        <merge-tags :action="'changeMailchimp'" :option="'last_name'"></merge-tags>
      </div>
    </fieldset>

  </div>
</template>

<script>
import MergeTags from 'admin/components/actions/MergeTag.vue'
import { EventBus } from 'admin/utils/eventBus.js';

export default {
  name: 'Mailchimp',
  props: ['settings', 'id'],
  data(){
    return {
      list: [],
      selected: ''
    }
  },
  methods: {
    onChange( key, value ){
      this.$store.commit('editAction', { key: key, value: value, id: this.id })
    },
  },
  created(){
    EventBus.$on('changeMailchimp', (data) => {
      var oldVal = this.settings[data.option] || ''
      var newVal = oldVal + '[' + data.tag + ']'
      this.onChange( data.option, newVal )
    })
    if(this.$store.state.config.integrations.mailchimp.settings.api){
      axios.post( 'mailchimp/list', {
        settings: this.$store.state.config.integrations.mailchimp.settings.api
      } )
        .then( response => {
          this.list = response.data.lists
        })
    }
  },
  components:{
    MergeTags
  }
};
</script>