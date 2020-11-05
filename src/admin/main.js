import Vue from 'vue'
import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'

import Vuikit from 'vuikit'
import VuikitIcons from '@vuikit/icons'
import '@vuikit/theme'

Vue.use(Vuikit)
Vue.use(VuikitIcons)

Vue.config.productionTip = false

import VueCodeHighlight from "vue-code-highlight";

Vue.use(VueCodeHighlight);

import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#formello-app',
  store,
  router,
  render: h => h(App)
});


// fix the admin menu for the slug "vue-app"
menuFix('formello');
