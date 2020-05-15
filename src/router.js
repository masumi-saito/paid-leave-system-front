import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Signup from './components/SignUp'
import Home from './components/Home'
import Summary from './components/Summary'
import Apply from './components/Apply'
import Permmision from './components/Permmision'
import Admin from './components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
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
