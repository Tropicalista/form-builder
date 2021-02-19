<template>
  <div class="formello">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="regular-text" :value="settings.name" @input="onChange('name', $event.target.value)">
    </div>
    <div class="form-group">
      <label>From</label>
      <input type="text" class="regular-text" :value="settings.from" @input="onChange('from', $event.target.value)">
      <merge-tags :action="'changeEmail'" :option="'from'"></merge-tags>
    </div>
    <div class="form-group">
      <label>To</label>
      <input type="text" class="regular-text" :value="settings.to" @input="onChange('to', $event.target.value)">
      <merge-tags :action="'changeEmail'" :option="'to'"></merge-tags>
    </div>
    <div class="form-group">
      <label>Reply To</label>
      <input type="text" class="regular-text" :value="settings.replyto" @input="onChange('replyto', $event.target.value)">
      <merge-tags :action="'changeEmail'" :option="'replyto'"></merge-tags>
    </div>
    <div class="form-group">
      <label>Subject</label>
      <input type="text" class="regular-text" :value="settings.subject" @input="onChange('subject', $event.target.value)">
      <merge-tags :action="'changeEmail'" :option="'subject'"></merge-tags>
    </div>
    <div class="form-group">
      <label>Message</label>
      <textarea class="regular-text" :value="settings.message"  @input="onChange('message', $event.target.value)" rows="6"></textarea>
      <merge-tags :action="'changeEmail'" :option="'message'"></merge-tags>
    </div>
    <div class="form-group">
      <label>Content Type</label>
      <select :value="settings.content_type"  @input="onChange('content_type', $event.target.value)">
        <option>text/html</option>
        <option>text/plain</option>
      </select>
    </div>
  </div>
</template>

<script>
import { EventBus } from 'admin/utils/eventBus.js';
import MergeTags from 'admin/components/actions/MergeTag.vue'
export default {
  name: 'Email',
  props: ['settings', 'id'],
  methods: {
    onChange( key, value ){
      this.$store.commit('editAction', { key: key, value: value, id: this.id })
    },
  },
  created(){
    EventBus.$on('changeEmail', (data) => {
      var newVal = this.settings[data.option] + '[' + data.tag + ']'
      this.onChange( data.option, newVal )
    })
  },
  computed: {
    name: {
      get () {
        return this.settings.name
      },
      set (value) {
        this.$store.commit('editAction', { key: 'name', value: value, id: this.id })
      }
    }
  },
  components:{
    MergeTags
  }
};
</script>