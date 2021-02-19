<template>
  <fieldset class="formello">
    <legend>Advanced settings:</legend>

      <div class="form-group"  v-show="hide('minLength')">
        <label>Min length</label>
        <input type="text" class="regular-text" :value="field.attrs.minlength" @input="onChange( $event.target.value, 'minlength', 'attrs')">
        <p class="description">The file type(s) accepted.</p>
      </div>
      <div class="form-group"  v-show="hide('maxLength')">
        <label>Max length</label>
        <input type="text" class="regular-text" :value="field.attrs.maxlength" @input="onChange( $event.target.value, 'maxlength', 'attrs')">
        <p class="description">The file type(s) accepted.</p>
      </div>
      <div class="form-group"  v-show="hide('accept')">
        <label>Accept</label>
        <input type="text" class="regular-text" :value="field.attrs.accept" @input="onChange( $event.target.value, 'accept', 'attrs')">
        <p class="description">The file type(s) accepted.</p>
      </div>
      <div class="form-group"  v-show="hide('multiple')">
        <label>Multiple</label>
        <input type="checkbox" class="regular-text" :value="field.attrs.multiple" @input="onChange( $event.target.checked, 'multiple', 'attrs')">
        <p class="description">The incremental minimum step.</p>
      </div>
      <div class="form-group"  v-show="hide('maxFileSize')">
        <label>Max file size</label>
        <input type="number" class="regular-text" step="100" :value="field.maxFileSize" @input="onChange( $event.target.checked, 'maxFileSize')">
        <p class="description">Max file size in kb.</p>
      </div>
      <div class="form-group"  v-show="hide('maxFileNumber')">
        <label>Max file number</label>
        <input type="number" class="regular-text" :value="field.maxFileNumber" @input="onChange( $event.target.checked, 'maxFileNumber')">
        <p class="description">The incremental minimum step.</p>
      </div>
      <div class="form-group"  v-show="hide('min')">
        <label>Min</label>
        <input type="number" class="regular-text" :value="field.attrs.min" @input="onChange( $event.target.value, 'min', 'attrs')">
        <p class="description">The min value</p>
      </div>
      <div class="form-group"  v-show="hide('max')">
        <label>Max</label>
        <input type="number" class="regular-text" :value="field.attrs.max" @input="onChange( $event.target.value, 'max', 'attrs')">
        <p class="description">The max value</p>
      </div>
      <div class="form-group"  v-show="hide('step')">
        <label>Step</label>
        <input type="number" class="regular-text" :value="field.attrs.step" @input="onChange( $event.target.value, 'step', 'attrs')">
        <p class="description">The incremental minimum step.</p>
      </div>

  </fieldset>
</template>

<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  name: 'RangeSettings',
  props: {
    field: {
      type: Object,
      required: true
    }
  },
};
</script>