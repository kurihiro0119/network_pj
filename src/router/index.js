import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../views/page1.vue'
import Signup from '../components/Signup'
import Signin from '../components/Signin'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
