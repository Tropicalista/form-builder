<template>
  <div>

    <md-card>
      <md-card-header>
        <div class="md-title">Add new form</div>
      </md-card-header>

      <md-card-content>
        <md-field :class="messageClass">
          <label>Choose a form name</label>
          <md-input required v-model="title" @input="validate"></md-input>
          <span class="md-error">There is an error</span>
        </md-field>
      </md-card-content>

      <md-card-actions md-alignment="left">
        <md-button class="md-raised md-primary" @click.prevent="submit">Add form</md-button>
      </md-card-actions>
    </md-card>

  </div>
</template>

<script>

export default {

  name: 'Create',

  data () {
    return {
      isValid: true,
      showSpinner: false,
      title: ''
    };
  },
  methods: {
    submit () {
      if( !this.validate() ){ return false }

      this.showSpinner = true

      let form_data = new FormData;
      form_data.append('title', this.title)

      axios.post( 'form/create', form_data )
        .then( response => {
          this.$router.push( 'edit/' + response.data.id )
          this.showSpinner = false
        })
        .catch( error => console.log( error ) )
        .then( () => { this.showSpinner = false } )
    },
    validate(){
      if( !this.title ){
        this.isValid = false
        return false
      }else{
        this.isValid = true
        return true
      }

    }
  },
  computed: {
    messageClass () {
      return {
        'md-invalid': !this.isValid
      }
    }
  }
}
</script>
<style>
.formello-form-danger, .formello-form-danger:focus {
    color: #f0506e !important;
    border-color: #f0506e !important;
}
</style>