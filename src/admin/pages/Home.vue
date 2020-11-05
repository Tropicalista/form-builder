<template>
  <div class="home">
    <h1 @click="showPanel = !showPanel">{{ msg }} {{showPanel}}</h1>
    <h2 @click.prevent="onPrint()">GET HTML</h2>

    <sliding-panel v-show="showPanel" @close="showPanel = false">
      <div slot="content">
        <panel />
      </div>
    </sliding-panel>
      
    <div class="toolbar">

      <draggable
        class="dragArea list-group"
        :list="inputs"
        :sort="false"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :clone="cloneDog"
      >
        <div
          class="list-group-item input-item"
          v-for="(element, index) in inputs"
          :key="index"
        >
          {{ element.label }}
        </div>
      </draggable>    	
    </div>
    <div class="forms">
      <draggable
        class="dragArea list-group"
        :list="form"
        group="people"
        @update="onUpdate"
         id="result"
      >

        <div
          class="list-group-item formello"
          v-for="( elm, index ) in form"
          :key="elm.id"
          ref="formello"
        >
          <base-input :field="elm" />

          <span id="tools">
            <button @click="togglePanel(elm)" class="button button-primary"><span class="dashicons dashicons-admin-tools"></span></button>
            <button @click="deleteElm(index)" class="button button-primary"><span class="dashicons dashicons-trash"></span></button>
          </span>
        </div>

      </draggable>    	
    </div>
    <div>{{form}} <h1>{{idGlobal}}</h1></div>
    <raw-html :content="rawHtml" v-show="rawHtml" />
  </div>
</template>

<script>
import { EventBus } from 'admin/utils/eventBus.js';
import fieldDefs from 'admin/utils/fieldsDefinitions.js';
import Settings from "admin/pages/Settings.vue";
import SlidingPanel from "admin/components/SlidingPanel.vue";
import Panel from "admin/components/options/Panel.vue";
import BaseInput from "admin/components/inputs/BaseInput.vue";
import RawHtml from "admin/components/RawHtml.vue";
import draggable from "vuedraggable";

export default {

  name: 'Home',

  data () {
    return {
      showPanel: false,
  	  msg: 'Welcome to Your Vue.js Admin App',
  	  inputs: fieldDefs,
  	  form: [],
      drag: false,
      rawHtml: ''
    }
  },
  methods: {
    cloneDog(field) {
      return {...field, id: this.idGlobal+1};
    },
    deleteElm(field) {
      this.form.splice(field, 1);
      this.showPanel = false
    },
    onUpdate(){
      //here you have access to the update list via this.list...
      //console.log('updated', this.form[0]);
    },
		onPrint() {
		    //console.log(this.$refs.formello.$el)
        //console.log(document.getElementById('result'))
        this.$nextTick( () => {
          let html = ''
          this.$refs.formello.forEach( (element, index) => {
            html += element.firstChild.outerHTML
          })
          //this.rawHtml = html.toString()
          this.rawHtml = document.getElementById('result').outerHTML
        } )

		},
    togglePanel(input) {
      EventBus.$emit('togglePanel', input)
      this.showPanel = true
    }
  },
  created() {
    EventBus.$on('saveField', (data) => {
      this.showPanel = false
    })
  },
  computed: {
    idGlobal() {
      return this.form.length
    }
  },
  components: {
  	Settings,
  	BaseInput,
    SlidingPanel,
    Panel,
    draggable,
    RawHtml
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
