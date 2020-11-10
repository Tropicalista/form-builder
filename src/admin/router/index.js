import Vue from 'vue'
import Router from 'vue-router'
import Home from 'admin/pages/Home.vue'
import Form from 'admin/pages/Form.vue'
import Create from 'admin/pages/Create.vue'
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
      path: '/new',
      name: 'Create',
      component: Create
    },
    {
      path: '/edit/:id',
      name: 'Form',
      component: Form
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
  ]
})
