import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'

import axios from 'axios'

Vue.config.productionTip = false

import store from './store/store'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

window.axios = axios 

axios.defaults.headers.common = {
  /* eslint-disable no-undef */
  'X-WP-Nonce': formello_var.nonce,
  'Cache-Control': 'no-cache',
  'Pragma': 'no-cache',
  'Expires': '0'
}
axios.defaults.baseURL = formello_var.baseurl

const { __, _x, _n, _nx } = wp.i18n;

axios
  .get('/settings')
  .then(r => r.data)
  .then(config => {
    store.commit('setConfig', config)

    /* eslint-disable no-new */
    const app = new Vue({
      el: '#formello-app',
      store,
      router,
      render: h => h(App),
      mounted() {
        this.enableInterceptor()
      },
      data: {
          isLoading: false,
          axiosInterceptor: null,
          showSnackbar: false,
          snackBarMessage: '',
          spinner: window.formello_var.formello_url + '/assets/images/submit-spin.svg'
      },
      methods: {
          enableInterceptor() {
              this.axiosInterceptor = window.axios.interceptors.request.use((config) => {
                  this.isLoading = true
                  return config
              }, (error) => {
                  this.isLoading = false
                  this.showSnackbar = true
                  this.snackBarMessage = error
                  return Promise.reject(error)
              })
              
              window.axios.interceptors.response.use((response) => {
                  this.isLoading = false  
                  return response
              }, (error) => {
                  this.isLoading = false
                  this.showSnackbar = true
                  this.snackBarMessage = error
                  return Promise.reject(error)
              })
          },
          
          disableInterceptor() {
              window.axios.interceptors.request.eject(this.axiosInterceptor)
          },     
      },
    })

  })


function errorResponseHandler(error) {
  // check for errorHandle config
  if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
    return Promise.reject(error);
    }

     // if has response show the error
  if (error.response) {
    console.log(error.response.data.message)
    window.showSnackbar = true
  }
}

// fix the admin menu for the slug "vue-app"
menuFix('formello');
