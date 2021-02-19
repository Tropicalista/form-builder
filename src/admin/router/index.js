import Vue from 'vue'
import Router from 'vue-router'
import Home from 'admin/pages/Home.vue'
import Form from 'admin/pages/Form.vue'
import Create from 'admin/pages/Create.vue'
import Settings from 'admin/pages/Settings.vue'
import Submissions from 'admin/pages/Submissions.vue'
import Submission from 'admin/pages/Submission.vue'
import Integrations from 'admin/pages/Integrations.vue'
import store from 'admin/store/store'

Vue.use(Router)

const router = new Router({
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
    {
      path: '/submissions',
      name: 'Submissions',
      component: Submissions
    },
    {
      path: '/submissions/:id',
      name: 'Submission',
      component: Submission
    },
    {
      path: '/integrations',
      name: 'Integrations',
      component: Integrations
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.config) {
    // the store initialize will set initialized to true
    await store.dispatch('initialize')
  }
  next();
});

export default router