import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Dashboard from '@/views/dashboard/Dashboard'
import Page from '@/views/dashboard/Page'
import Visit from '@/views/dashboard/Visit'
import Ajax from '@/views/dashboard/Ajax'
import Exception from '@/views/dashboard/Exception'
import ExceptionDetails from '@/views/dashboard/ExceptionDetails'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/dashboard/visit'
  }, {
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
      path: 'exceptions',
      name: 'Exceptions',
      component: Exception
    }, {
      path: 'exceptions/:exceptionId',
      name: 'ExceptionDetails',
      component: ExceptionDetails
    }]
  }]
})
