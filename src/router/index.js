import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Dashboard from '@/pages/dashboard/Dashboard'
import Project from '@/pages/dashboard/Project'
import PageView from '@/pages/dashboard/PageView'
import SiteView from '@/pages/dashboard/SiteView'
import AjaxRequestList from '@/pages/dashboard/AjaxRequestList'
import AjaxRequestDetails from '@/pages/dashboard/AjaxRequestDetails'
import ResourceRequestList from '@/pages/dashboard/ResourceRequestList'
import ResourceRequestDetails from '@/pages/dashboard/ResourceRequestDetails'
import ExceptionList from '@/pages/dashboard/ExceptionList'
import ExceptionDetails from '@/pages/dashboard/ExceptionDetails'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/dashboard/site-view'
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [{
      path: 'projects',
      name: 'Projects',
      component: Project
    }, {
      path: 'page-view',
      name: 'PageView',
      component: PageView
    }, {
      path: 'site-view',
      name: 'SiteView',
      component: SiteView
    }, {
      path: 'ajax-request',
      name: 'AjaxRequestList',
      component: AjaxRequestList
    }, {
      path: 'ajax-request/details',
      name: 'AjaxRequestDetails',
      component: AjaxRequestDetails
    }, {
      path: 'resource-request',
      name: 'ResourceRequestList',
      component: ResourceRequestList
    }, {
      path: 'resource-request/details',
      name: 'ResourceRequestDetails',
      component: ResourceRequestDetails
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
