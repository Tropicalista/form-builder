import store from 'admin/store/store'
export default {
  methods: {
    onChange(value, key, isAttr){
      var obj = {
        key: key,
        val: value, 
        id: this.field.id,
        isAttr: isAttr ? isAttr : false
      }
      store.dispatch('updateField', obj)
    },
    hide(input){
      return !(this.field.settings.disabledInput.indexOf(input) > -1)
    }
  }
};