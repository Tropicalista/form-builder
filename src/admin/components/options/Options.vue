<template>
  <fieldset>
    <legend>Options:</legend>
    <draggable
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
    >

      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <div class="options-list" v-for="(o, index) in field.options" :key="o.id">
          <input type="hidden" :value="o.id" @input="onChange( $event.target.value, o.id, 'id' )" />
          <input type="text" v-show="single_field" :value="o.value" @input="onChange( $event.target.value, o.id, 'value' )" />
          <input type="text" :value="o.label" @input="onChange( $event.target.value, o.id, 'label' )" />
          <label><input type="checkbox" name="selected" :checked="o.selected" @input="onChange( $event.target.checked, o.id, 'selected' )" />Checked</label>
          <label><input type="checkbox" name="required" :checked="o.required" @input="onChange( $event.target.checked, o.id, 'required' )" />Required</label>

          <md-button class="md-icon-button md-raised md-minions md-accent" @click.prevent="deleteElement(index)">
            <md-icon>delete</md-icon>
          </md-button>            

        </div>
      </transition-group>
    </draggable>
    
    <md-button class="md-raised md-primary" @click.prevent="addElement()">
      Add
    </md-button>
    
    <div class="as-array" v-if="field.attrs.type == 'checkbox'">
      <label><input type="checkbox" v-model="single_field" />As single field</label>
    </div>

  </fieldset>
</template>

<script>
import draggable from "vuedraggable"
import { EventBus } from 'admin/utils/eventBus.js'

export default {

  name: 'OptionsSettings',
  props: ['field'],
  data () {
    return {
      drag: false,
      single_field: false
    }
  },
  methods: {
    onChange(value, id, prop){
      this.$store.commit('changeOption', {
        value: value,
        id: id,
        prop: prop,
        fieldId: this.field.id
      })

    },
    addElement(){

      let result = this.field.options.map(a => a.id)

      result.sort(function(a, b) {
        return a - b;
      })

      let id = 1
      if( result.length ){
        id = result[result.length - 1] + 1
      }

      var option = { 
        fieldId: this.field.id,
        label: "",
        value: "",
        id: id,
        required: false
      }
      this.$store.commit('addOption', option)
    },
    deleteElement(option){
      var option = { 
        option: option,
        fieldId: this.field.id
      }
      this.$store.commit('deleteOption', option)
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      }
    },
  },
  components: {
    draggable
  }
};
</script>

<style lang="css">
fieldset {
  border: 1px solid #dedede;
  padding: 10px;
}
.options-list {
  background-color: #fff;
  padding: 1em;
  margin-bottom: 1em;
  cursor: move;
}
.as-array {
  padding: 1em;
}
</style>