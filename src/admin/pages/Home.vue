<template>

  <vk-grid class="uk-child-width-expand@s">

    <div>
      <vk-card>

        <vk-button @click.prevent="goToNew()" type="primary" class="uk-margin">Create</vk-button>
        <div v-show="$root.isLoading"><vk-spinner></vk-spinner></div>
        <vuetable
          ref="myTable"
          :api-mode="false"
          :data="localData"
          :fields="fields"
          :css="css.table"
          track-by="ID"
          pagination-path=""
          @vuetable:checkbox-toggled="check"
          @vuetable:checkbox-toggled-all="check"
        >
          <div slot="shortcode" slot-scope="props">
            <input type="text" name="" :value="'[formello id=' + props.rowData.ID + ']'" readonly>
          </div>
          <div slot="post_title" slot-scope="props">
            <a :href="'#/edit/' + props.rowData.ID">{{props.rowData.post_title}}</a>
            <div class="row-actions">Succhia</div>
          </div>
          <div slot="actions" slot-scope="props"> 
            <vk-icon-button :href="'#/edit/' + props.rowData.ID" icon="cog" class="uk-button-primary"></vk-icon-button>
            <vk-icon-button @click.prevent="deleteRow(props.rowData.ID)" icon="trash" class="uk-button-danger"></vk-icon-button>
          </div>
        </vuetable>
      </vk-card>
    </div>

    <vk-modal :show.sync="show">
      <vk-modal-close @click="show = false"></vk-modal-close>
      <vk-modal-title slot="header">Modal Title</vk-modal-title>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div slot="footer" class="uk-text-right">
        <vk-button class="uk-margin-small-right" @click="show = false">Cancel</vk-button>
        <vk-button type="primary">Save</vk-button>
      </div>
    </vk-modal>

  </vk-grid>

</template>

<script>
import Vuetable from 'vuetable-2'
import VuetableFieldCheckbox from "vuetable-2/src/components/VuetableFieldCheckbox.vue";

export default {

  name: 'Home',

  data () {
    return {
      show: false,
      loading: false,
      localData: [],
      fields: [
        {
          name: VuetableFieldCheckbox,
          titleClass: "center aligned",
          dataClass: "center aligned"
        },
        {
          name: 'ID',
          title: 'ID',
          visible: false
        },
        {
          name: 'post_title',
          title: 'Form',
          titleClass: 'uk-table-expand',
          dataClass: 'center aligned',
        },
        {
          name: 'shortcode',
          title: 'Shortcode',
          titleClass: 'uk-width-small',
        },
        {
          name: 'actions',
          title: '',
          titleClass: 'uk-width-small',
        }
      ],
      css: {
        table: {
          tableWrapper: 'uk-overflow-auto',
          tableHeaderClass: 'fixed',
          tableBodyClass: '',
          tableClass: 'uk-table uk-table-divider uk-table-hover uk-table-small',
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
    showModal(){
      this.show = true
    },
    check(){
      console.log(this.$refs.myTable.selectedTo)
    },
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
    this.loading = true
    axios.get( 'form' )
      .then( response => {
        this.localData = response.data
        this.loading = false
      })

  },
  components: {
  	Vuetable,
    VuetableFieldCheckbox
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
