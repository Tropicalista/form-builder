import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

import axios from 'axios'

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

import VueCodeHighlight from "vue-code-highlight";

Vue.use(VueCodeHighlight);

import store from './store'

import { Offcanvas, OffcanvasClose, OffcanvasContent } from 'vuikit/lib/offcanvas'
import { Label } from 'vuikit/lib/label'
import { Grid } from 'vuikit/lib/grid'
import { Card } from 'vuikit/lib/card'
import { Button, ButtonLink } from 'vuikit/lib/button'
import { Tabs, TabsItem } from 'vuikit/lib/tabs'

window.axios = axios 

axios.defaults.headers.common = {
  /* eslint-disable no-undef */
  'X-WP-Nonce': formello_var.nonce
}
axios.defaults.baseURL = formello_var.baseurl

/* eslint-disable no-new */
const app = new Vue({
  el: '#formello-app',
  store,
  router,
  render: h => h(App),
  mounted() {
    this.enableInterceptor()
    axios.get( 'actions' )
      .then( response => {
        store.commit( 'setActions', response.data )
      })
  },
  data: {
      isLoading: false,
      axiosInterceptor: null,
  },
  methods: {
      enableInterceptor() {
          this.axiosInterceptor = window.axios.interceptors.request.use((config) => {
              this.isLoading = true
              return config
          }, (error) => {
              this.isLoading = false  
              return Promise.reject(error)
          })
          
          window.axios.interceptors.response.use((response) => {
              this.isLoading = false    
              return response
          }, function(error) {
              this.isLoading = false
              return Promise.reject(error)
          })
      },
      
      disableInterceptor() {
          window.axios.interceptors.request.eject(this.axiosInterceptor)
      },     
  },
  components:{
    VkLabel: Label,
    VkGrid: Grid,
    VkOffcanvas: Offcanvas,
    VkOffcanvasClose: OffcanvasClose,
    VkOffcanvasContent: OffcanvasContent,
    VkCard: Card,
    VkButton: Button,
    VkButtonLink: ButtonLink,
    VkTabs: Tabs,
    VkTabsItem: TabsItem,
  }
})

// fix the admin menu for the slug "vue-app"
menuFix('formello');
