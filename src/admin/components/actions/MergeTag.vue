<template>
	<span class="merge-tags">
    <md-button class="md-icon-button md-raised md-minions md-primary" @click="toggleMenu = true">
      <md-icon>menu</md-icon>
    </md-button>    
	  <md-menu :md-active.sync="toggleMenu">
	    <md-menu-content>
	      <md-menu-item v-for="(t,index) in tags" @click="add(t)" :key="index">{{t}}</md-menu-item>
	    </md-menu-content>
	  </md-menu>	
	</span>
</template>
<script>
import { EventBus } from 'admin/utils/eventBus.js';
export default {
  name: 'Actions',
  props: ['action','option'],
  data () {
    return {
      toggleMenu: false,
      tags: this.$store.state.fields.flatMap( a => {
        if(a.attrs.type !== 'submit'){
          return a.attrs.name
        }
        return []
      } ),
    }
  },
  methods: {
    add(tag) {
      console.log(tag, this.action, this.option)
	  	EventBus.$emit( this.action, {
	  		tag: tag,
	  		option: this.option
	  	} )
    }
  },
};	
</script>
<style>
.merge-tags {
  position: absolute;
}
</style>