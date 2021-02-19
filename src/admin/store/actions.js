export default {

  updateSelectedField: ({ commit }, payload) => {
    commit("setSelected", payload)
  },

  updateFields: ({ commit }, payload) => {
    let jsonFields = JSON.parse(JSON.stringify(payload))
    commit("updateFields", jsonFields)
  },

  updateField: ({ commit }, payload) => {
    commit('changeVal', payload)
  },

  initialize: ({ commit }) => {
    axios.get( 'settings' )
      .then( response => {
        commit( 'setConfig', response.data )
      })
  }
  
}
