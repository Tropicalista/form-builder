<template>
  <div>
    <md-table v-model="localData" md-card @md-selected="onSelect">

      <md-table-toolbar class="md-toolbar-section-start">
        <md-field>
          <label for="forms">Forms</label>
          <md-select v-model="selectedForm" @change="getSubmissions">
            <md-option value="0">Choose a form</md-option>
            <md-option :value="f.ID" v-for="(f, index) in daForms" :key="index">{{f.post_title}}</md-option>
          </md-select>
        </md-field>
      </md-table-toolbar>

      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-end">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="active = true">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
        <md-table-cell v-for="(c, index) in columns" :md-label="c" :key="index">{{item[c]}}</md-table-cell>
      </md-table-row>
      <md-table-pagination v-show="localData.length" />
    </md-table>

    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Use Google's location service?"
      md-confirm-text="Delete"
      md-cancel-text="Cancel"
      @md-confirm="deleteRow" />

  </div>
</template>

<script>
  export default {
    name: 'TableSubmissions',
    data: () => ({
      active: false,
      selectedForm: 0,
      localData: [],
      columns: [],
      daForms: [],
    }),
    methods: {
      prepareTable(data) {

        // first get all data prop from array
        let result = data.map(({ data }) => data)


        // Create an object with all the keys in it
        // This will return one object containing all keys the items
        let obj = result.reduce((res, item) => ({...res, ...item}));

        // Get those keys as an array
        this.columns = Object.keys(obj);

        // Create an object with all keys set to the default value (0)
        let def = this.columns.reduce((result, key) => {
          result[key] = ""
          return result;
        }, {});

        // Use object destrucuring to replace all default values with the ones we have
        let dataTable = result.map((item) => ({...def, ...item}));

        this.localData = dataTable

      },
      getSubmissions(id) {
        axios.get( 'submissions/' + this.selectedForm )
          .then( response => {
            this.prepareTable(response.data)
          })
      },
      deleteRow(id) {
        axios.delete( 'form' + '/' + id )
          .then( response => {
            this.localData = [
              ...this.localData.filter((item) => item.ID !== id)
            ]          
          })
      },
      onSelect (items) {
        this.show = true
        this.selected = items
      },
      getAlternateLabel (count) {
        let plural = ''

        if (count > 1) {
          plural = 's'
        }

        return `${count} form${plural} selected`
      }
    },
    created() {
      axios.get( 'form' )
        .then( response => {
          this.daForms = response.data
        })

    },
    computed:{
      test(){
        return this.daForms
      }
    }
  }
</script>