<template>

    <draggable :list="fields"
               :clone="clone"
               :options="dropElementOptions"
               >
        <div
          class="formello-fields"
          v-for="(element, index) in fields"
          :key="index"
        >
          {{ element.label }}
        </div>
    </draggable>

</template>

<script>
import fieldDefs from 'admin/utils/fieldsDefinitions.js';
import draggable from "vuedraggable";
import { EventBus } from 'admin/utils/eventBus.js';

import BaseInput from "admin/components/inputs/BaseInput.vue";
import Preview from 'admin/components/ui/Preview.vue'

export default {

  name: 'FieldList',
  data () {
    return {
      fields: fieldDefs,
      dropElementOptions: { 
        group: { name:'formbuilder', pull:'clone', put:false }, 
        sort: false,
        ghostClass: "sortable__ghost",
        filter: ".is-disabled"
      }
    }
  },
  methods: {
    clone(field){
      let result = this.$store.state.fields.map(a => a.id)

      result.sort(function(a, b) {
        return a - b;
      })

      let id = 1
      if( result.length ){
        id = result[result.length - 1] + 1
      }

      // clone without reference
      var newObj = JSON.parse(JSON.stringify(field))
      newObj.id = id
      if( newObj.attrs.type != 'submit' ){
        newObj.attrs.name = 'field-' + id
      }

      return newObj;
    },
  },  
  components: {
    draggable,
  }
}
</script>
<style>
.formello-fields {
  width: 33%;
  float: left;
  margin: 1em !important;
  border: 1px solid #dedede;
  text-align: center;
  padding: 1em;
  cursor: pointer;
  box-sizing: border-box;
}
.ghost {
  width: 100%;
  background-color: #dedede;
}
</style>