import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Intro from '@/components/Intro'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
