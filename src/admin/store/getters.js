export default {
  
  getFieldById: (state) => (id) => {
    return state.fields.find(field => field.id === id)
  },
  
  getActionById: (state) => (id) => {
    return state.settings.actions.find(action => action.id === id)
  },

}
