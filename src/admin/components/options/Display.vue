<template>
  <fieldset class="formello">
    <legend>Display settings:</legend>
    <div class="form-group" v-if="hide('placeholder')">
      <label>Placeholder</label>
      <input type="text" class="regular-text" :value="field.attrs.placeholder" @input="onChange( $event.target.value, 'placeholder', 'attrs')">
      <p class="description">The placeholder inside your input</p>
    </div>
    <div class="form-group" v-if="hide('value')">
      <label>Default Value</label>
      <input type="text" class="regular-text" :value="field.attrs.value" @input="onChange($event.target.value,'value', 'attrs')">
      <p class="description">The default value for your input</p>
    </div>
  </fieldset>
</template>

<script>
import mixin from './mixin'

export default {
  mixins: [mixin],
  name: 'DisplaySettings',
  props: {
    field: {
      type: Object,
      required: true
    }
  }
};
</script>