import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/dashboard/Dashboard'
import Page from '@/views/dashboard/Page'
import Visit from '@/views/dashboard/Visit'
import Ajax from '@/views/dashboard/Ajax'
import Exception from '@/views/dashboard/Exception'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [{
      path: 'page',
      name: 'Page',
      component: Page
    }, {
      path: 'visit',
      name: 'Visit',
      component: Visit
    }, {
      path: 'ajax',
      name: 'Ajax',
      component: Ajax
    }, {
      path: 'exception',
      name: 'Exception',
      component: Exception
    }]
  }]
})
