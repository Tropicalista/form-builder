<template>
  <fieldset class="formello">
    <legend>Style settings:</legend>
    <div class="form-group">
      <label>Label class</label>
      <input type="text" class="regular-text" :value="field.class.label" @input="onChange( $event.target.value,'label', 'class' )">
      <p class="description">The placeholder inside your input</p>
    </div>
    <div class="form-group">
      <label>Input class</label>
      <input type="text" class="regular-text" :value="field.class.input" @input="onChange( $event.target.value,'input', 'class' )">
      <p class="description">The default value for your input</p>
    </div>
    <div class="form-group">
      <label>Description class</label>
      <input type="text" class="regular-text" :value="field.class.message" @input="onChange( $event.target.value,'message', 'class' )">
      <p class="description">A description for your input</p>
    </div>

  </fieldset>
</template>

<script>
import mixin from './mixin'

export default {
  mixins: [mixin],
  name: 'StyleSettings',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
};
</script>