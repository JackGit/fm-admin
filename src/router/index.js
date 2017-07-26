import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Dashboard from '@/pages/dashboard/Dashboard'
import Page from '@/pages/dashboard/Page'
import Visit from '@/pages/dashboard/Visit'
import AsyncRequestList from '@/pages/dashboard/AsyncRequestList'
import AsyncRequestDetails from '@/pages/dashboard/AsyncRequestDetails'
import ExceptionList from '@/pages/dashboard/ExceptionList'
import ExceptionDetails from '@/pages/dashboard/ExceptionDetails'

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
      path: 'async-request',
      name: 'AsyncRequestList',
      component: AsyncRequestList
    }, {
      path: 'async-request/:asyncRequestId',
      name: 'AsyncRequestDetails',
      component: AsyncRequestDetails
    }, {
      path: 'exceptions',
      name: 'ExceptionList',
      component: ExceptionList
    }, {
      path: 'exceptions/:exceptionId',
      name: 'ExceptionDetails',
      component: ExceptionDetails
    }]
  }]
})
