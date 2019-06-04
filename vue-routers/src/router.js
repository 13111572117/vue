import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import First from './views/First'
import Shop from './views/shop'
import Form from './views/form'
import User from './views/user'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'home',
      component: Home
    },
    {
      path:'/first',
      component:First
    },
    {
      path:'/shop',
      component:Shop
    },
    {
      path:'/form',
      component:Form
    },
    {
      path:'/user',
      component:User
    }
  ]
})
