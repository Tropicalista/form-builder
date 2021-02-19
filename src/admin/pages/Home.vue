<template>
  <div class="">
    <md-table v-model="localData" md-card @md-selected="onSelect">
      <md-table-toolbar>
        <md-button class="md-raised md-primary" @click="goToNew()">Create new</md-button>
      </md-table-toolbar>

      <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
        <div class="md-toolbar-section-end">{{ getAlternateLabel(count) }}</div>

        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button md-accent" @click="active = true">
            <md-icon>delete</md-icon>
          </md-button>
        </div>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="multiple">
        <md-table-cell md-label="Form" md-sort-by="post_title">
          <a :href="'#/edit/' + item.ID">{{ item.post_title }}</a>
          <span class="row-actions"><a :href="'#/submissions/' + item.ID">Submissions</a></span>
        </md-table-cell>
        <md-table-cell md-label="Slug">
          <input type="text" readonly :value="'[formello id=' + item.ID + ']'" />
        </md-table-cell>
      </md-table-row>
      <md-table-pagination />
    </md-table>

    <md-dialog-confirm
      :md-active.sync="active"
      md-title="Are you sure you want proceed?"
      md-confirm-text="Delete"
      md-cancel-text="Cancel"
      @md-confirm="deleteRow" />


  </div>
</template>

<script>
  export default {
    name: 'TableMultiple',
    data: () => ({
      active: false,
      localData: [],
      selected: [],
    }),
    methods: {
      deleteRow() {
        let arrayLength = this.selected.length

        for (var i = 0; i < arrayLength; i++) {
          let id = this.selected[i].ID
          axios.delete( 'form/' + id )
            .then( response => {
              this.localData = [
                ...this.localData.filter((item) => item.ID !== id)
              ]          
            })  

        }

      },
      goToNew() {
        this.$router.push('new')
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
      this.loading = true
      axios.get( 'form' )
        .then( response => {
          this.localData = response.data
          this.loading = false
        })

    },
  }
</script>