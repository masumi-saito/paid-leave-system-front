import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Summary from './components/Summary'
import Apply from './components/Apply'
import Permmision from './components/Permmision'
import Admin from './components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/permmision',
      name: 'Permmision',
      component: Permmision
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
