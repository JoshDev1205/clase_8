import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoginRoutes } from '@/modules/login/routes'
import HomePage from '@/pages/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  ...LoginRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
