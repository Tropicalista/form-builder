<template>
	<div class="md-layout md-gutter">
	  <div class="md-layout-item">
	    <md-card>
	      <md-card-content>
	        <form-area ref="formarea" />
	      </md-card-content>
	    </md-card>      
	  </div>
	  <div class="md-layout-item">
	    <md-card>
	      <md-card-content>
	        <field-list />
	      </md-card-content>
	    </md-card> 
	  </div>
	</div>
</template>
<script>
import FieldList from 'admin/components/ui/FieldList.vue'
import FormArea from 'admin/components/ui/FormArea.vue'
import Panel from "admin/components/options/Panel.vue";

export default {

  name: 'FormEdit',
  components: {
    FormArea,
    FieldList
	},
}
</script>