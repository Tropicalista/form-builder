<template>
  <div class="formello">
    <div class="form-group" v-if="hide('name')">
      <label>Name</label>
      <input type="text" class="regular-text" :value="field.attrs.name" @input="updateName($event.target.value)">
      <p class="description">The name of your input: This will be shown on submissions table</p>
    </div>
    <div class="form-group" v-if="hide('label')">
      <label>Label</label>
      <input type="text" class="regular-text" name="label" :value="field.label" @input="onChange( $event.target.value, 'label' )">
      <p class="description"></p>
    </div>
    <div class="form-group" v-if="hide('message')">
      <label>Description</label>
      <textarea name="description" rows="5" class="regular-text" :value="field.message" @input="onChange( $event.target.value, 'message' )"></textarea>
      <p class="description">A description for your input</p>
    </div>
    <div class="form-group" v-if="hide('required')">
      <label>Required</label>
      <input type="checkbox" name="required" :checked="field.attrs.required" @change="onChange( $event.target.checked, 'required', 'attrs')">
    </div>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  name: 'BaseSettings',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateName(name){
      name = name.split(' ').join('_').replace(/\W/g, '')
      this.onChange( name, 'name', 'attrs' )
    },
  },
  computed: {
  }
}
</script>
<style lang="less">
fieldset {
  margin-top: 1.5em;
}
.formello {
  &
  label {
    display: block;
    margin-bottom: .6em;
    font-weight: bold;
  }
  &
  legend {
    font-weight: bold;
  }
  .form-group {
    margin-bottom: 1em;
  }  
}
</style>