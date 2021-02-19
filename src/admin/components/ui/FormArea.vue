<template>

<draggable v-model="forms" 
           class="dragArea"
           v-bind="dragOptions"
           sort="true"
           id="result"
           ref="resultForm"
           >

  <div
    class="formello-wrapper"
    v-for="( elm, index ) in forms"
    :key="elm.id"
    ref="formello"
  >
    <base-input :field="elm" />
    <div class="hidden-field" v-if="elm.type == 'hidden'">HIDDEN FIELD</div>
    <div class="hidden-field" v-if="elm.type == 'recaptcha'">ReCaptcha</div>
    
    <span class="formello-tools">
      <md-button class="md-icon-button md-raised md-minions md-primary" @click.prevent="togglePanel(elm)">
        <md-icon>edit</md-icon>
      </md-button>
      <md-button class="md-icon-button md-raised md-minions md-accent" @click.prevent="deleteElm(elm.id)">
        <md-icon>delete</md-icon>
      </md-button>          
    </span>

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

  name: 'FormArea',
  data () {
    return {
      drag: false,
      validation: {
        constraints: {},
        messages: {}
      }
    }
  },
  methods: {
    save( id, data ){
      axios.put( 'form/' + id, data )
        .then( response => {
          this.$root.showSnackbar = true
          this.$root.snackBarMessage = "Updated correctly"
        })
        .catch( error => {
          this.$root.showSnackbar = true
          this.$root.snackBarMessage = error
        } )
    },
    togglePanel(field) {
      //this.selected = field
      EventBus.$emit('togglePanel', field)
    },
    deleteElm(id) {
      this.$store.commit("deleteField", id)
    },
    addValidation(data){
      // flush to prevent deleted field to have constraints
      this.$store.commit('flushConstraints')
      //reset date check
      this.$store.commit('updateFormSettings', { key: 'has_date', value: false })

      data.forEach( (item, index) => {
        var constraints = []

        if( !item.attrs.name && !item.attrs.type == 'submit' ){
          var obj = {
            key: 'name',
            val: 'field-' + item.id, 
            id: item.id,
            isAttr: 'attrs'
          }
          this.$store.dispatch('updateField', obj)
        }

        if( item.attrs.required ){
          constraints.push('required')
        }

        if( item.attrs.minlength ){
          constraints.push('min:' + item.attrs.minlength )
        }

        if( item.attrs.maxlength ){
          constraints.push('max:' + item.attrs.maxlength )
        }

        if( item.attrs.type == 'email' ){
          constraints.push('email')
        }

        if( item.attrs.type == 'url' ){
          constraints.push('url')
        }

        if( item.attrs.type == 'number' || item.attrs.type == 'range' ){
          constraints.push('numeric')
        }

        if( item.attrs.type == 'date' ){
          constraints.push('date')
          this.$store.commit('updateFormSettings', { key: 'has_date', value: true })
        }

        if( item.attrs.type == 'file' ){
          if(item.attrs.multiple){
            item.attrs.name = item.attrs.name + '[]'
            this.$store.dispatch('updateField', {
              key: 'name',
              val: item.attrs.name + '[]', 
              id: item.id,
              isAttr: 'attrs'
            })
          }
          constraints.push( 'uploaded_file:0,' + item.maxFileSize + 'K,' + item.attrs.accept.trim() )
        }

        if( constraints.length ){
          this.$store.commit('updateConstraints', {
            key: item.attrs.name,
            value: constraints.join("|")
          })        
        }

      }) 

    }
  },
  created () {
    EventBus.$on('showHtml', (data) => {

      if( !this.$store.state.fields.length ){
        this.save(data.ID, {})
      }

      this.addValidation(this.$store.state.fields)

      let html = this.$refs.resultForm.$el.childNodes

      let res = ''
      html.forEach(element => {
        
        // add checked attribute to checkboxes
        var inputs = element.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++) {
            if( inputs[i].type == "checkbox" || inputs[i].type == "radio" ) {
              if(inputs[i].checked ){
                inputs[i].setAttribute("checked", "checked")
              }else{
                inputs[i].removeAttribute("checked")
              }
            }  
        }
        // get HTML
        res += element.getElementsByClassName('formello-field')[0].innerHTML

      });

      data.post_content = res.replace(/<!---->/g, '')
      data.settings = { 
        fields: this.$store.state.fields,
        settings: this.$store.state.settings,
      }

      this.save( data.ID, data )

    })
  },
  computed: {
    forms: {
      get() {
        return this.$store.state.fields;
      },
      set(value) {
        this.$store.dispatch("updateFields", value);
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: { name:'formbuilder', pull:false, put:true }, 
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  components: {
    draggable,
    BaseInput,
    Preview
  }
}
</script>
<style>
.formello-wrapper {
  position: relative;
  padding: 30px 20px;
  margin-bottom: 20px;
  border: 1px solid #fff;
}
.formello-wrapper:hover {
  cursor: move;
  border: 1px solid #dedede;
}
.md-minions {
  font-size: 18px !important;
  min-width: 28px !important;
  width: 28px !important;
  height: 28px !important;
}
.formello-wrapper label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5em;
}
.formello-wrapper input[type], .formello-wrapper textarea {
  width: 100%;
}
.formello-wrapper input[type="checkbox"], .formello-wrapper input[type="radio"], .formello-wrapper input[type="submit"] {
  width: auto;
}
.formello-wrapper select {
  width: 100%;
  min-height: 30px;
}
.formello-tools {
  position: absolute;
  top: 5px;
  right: 20px;
}
#result {
  width: 100%;
  height: 100%;
}
.formello-wrapper .hidden-field {
  display: block;
  text-align: center;
  font-weight: bold;
}
.spinner-hide {
  display: none;
}
.dragArea {
  width: 100%;
  min-height: 500px;
  float: left;
}
.dragArea:empty {
  background-color: red;
}
</style>
