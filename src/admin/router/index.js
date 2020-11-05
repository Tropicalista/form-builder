import Vue from 'vue'
import Router from 'vue-router'
import Home from 'admin/pages/Home.vue'
import Forms from 'admin/pages/Forms.vue'
import Settings from 'admin/pages/Settings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forms',
      name: 'Forms',
      component: Forms
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})
