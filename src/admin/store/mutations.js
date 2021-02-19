import Vue from 'vue'
export default {

  changeVal( state, payload ) {
    var field = state.fields.find( field => field.id === payload.id )
    if( payload.isAttr ){
      Vue.set( field[payload.isAttr], payload.key, payload.val )
    }else{
      Vue.set( field, payload.key, payload.val )
    }
  },

  changeOption( state, payload ) {
    var field = state.fields.find( field => field.id === payload.fieldId )
    field.options = field.options.map( o => {
      if( o.id === payload.id ){
        o[payload.prop] = payload.value
      }
      return o
    })
  },

  deleteOption( state, payload ) {
    var field = state.fields.find( field => field.id === payload.fieldId )
    field.options.splice(payload.option, 1)
  },

  addOption( state, payload ) {
    var field = state.fields.find( field => field.id === payload.fieldId )
    field.options.push(payload)
  },

  setConfig(state,payload){
    state.config = payload
  },

  editIntegration( state, payload ) {
    if( !state.config.integrations ){
      state.config.integrations = {}
    }
    state.config.integrations[payload.type] = { settings : payload.settings }
  },

  setActions(state,payload){
    state.actions = payload
  },

  addAction(state,payload){
    if( !state.settings.actions ){
      state.settings.actions = []
    }
    payload.id = state.settings.actions.length + 1 
    state.settings.actions.push( JSON.parse(JSON.stringify(payload)) )
  },

  editAction( state, payload ) {
    var action = state.settings.actions.find( action => action.id === payload.id )
    action.settings[payload.key] = payload.value
  },

  deleteAction(state, payload){
    var actions = state.settings.actions
    actions.splice(actions.indexOf(payload), 1)
  },

  setSettings(state,payload){
    state.settings = payload
  },

  flush(state){
    state.fields = []
  },

  updateFields: (state, payload) => {
    state.fields = payload;
  },

  updateField(state, payload ) {
    state.fields = state.fields.map( field => {
      if(field.id === payload.id){
        return Object.assign({}, field, payload)
      }
      return field
    })
  },

  deleteField: (state, id) => {
    state.fields = [
      ...state.fields.filter((item) => item.id !== id)
    ]
  },

  // MESSAGES
  updateMessage(state, payload){
    state.settings.validation.messages[payload.group][payload.key] = payload.value
  },

  updateFormSettings(state, payload){
    state.settings.[payload.key] = payload.value
  },

  // CONFIG
  updateConfig(state, payload){
    state.config.[payload.key] = payload.value
  },

  updateConfigRecaptcha(state, payload){
    state.config.recaptcha.[payload.key] = payload.value
  },

  updateConfigMsg(state,payload){
    state.config.validation_messages[payload.group][payload.key] = payload.value
  },

  // CONSTRAINTS
  updateConstraints(state, payload){
    if( state.settings.validation.constraints == undefined ){
      state.settings.validation.constraints = {}
    }
    state.settings.validation.constraints[payload.key] = payload.value
  },

  flushConstraints(state){
    state.settings.validation.constraints = {}
  },

}
