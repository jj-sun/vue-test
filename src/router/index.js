import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login/Login'
import Main from '@/view/main/Main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})

export default router
