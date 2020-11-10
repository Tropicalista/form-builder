<template>


  <vk-grid class="uk-child-width-expand@s">

    <div>
      <vk-card>

        <vk-button @click.prevent="goToNew()" type="primary">Create</vk-button>
        
        <vuetable ref="vuetable"
          :api-mode="false"
          :data="localData"
          :fields="[ 'post_title', 'ID', 'actions' ]"
          :css="css.table"
          pagination-path=""
        >
          <div slot="id" slot-scope="props">
            <input type="text" name="" :value="'[formello id=' + props.rowData.ID + ']'" readonly>
          </div>
          <div slot="post_title" slot-scope="props">
            <a :href="'#/edit/' + props.rowData.ID">{{props.rowData.post_title}}</a>
          </div>
          <div slot="actions" slot-scope="props"> 
            <vk-icon-button :href="'#/edit/' + props.rowData.ID" icon="cog"></vk-icon-button>
            <vk-icon-button @click.prevent="deleteRow(props.rowData.ID)" icon="trash"></vk-icon-button>
          </div>
        </vuetable>
      </vk-card>
    </div>

  </vk-grid>

</template>

<script>
import Vuetable from 'vuetable-2'

export default {

  name: 'Home',

  data () {
    return {
      localData: [],
      css: {
        table: {
          tableWrapper: 'uk-overflow-auto',
          tableHeaderClass: 'fixed',
          tableBodyClass: '',
          tableClass: 'uk-table uk-table-divider uk-table-hover',
          loadingClass: 'loading',
          ascendingIcon: 'blue chevron up icon',
          descendingIcon: 'blue chevron down icon',
          ascendingClass: 'sorted-asc',
          descendingClass: 'sorted-desc',
          sortableIcon: 'grey sort icon',
          handleIcon: 'grey sidebar icon',
        },
      }
    }
  },
  methods: {
    goToNew() {
      this.$router.push('new')
    },
    deleteRow(id) {
      axios.delete( 'form' + '/' + id )
        .then( response => {
          this.localData = [
            ...this.localData.filter((item) => item.ID !== id)
          ]          
        })


    }
  },
  created() {
    axios.get( 'form' )
      .then( response => {
        this.localData = response.data
      })

  },
  components: {
  	Vuetable,
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
