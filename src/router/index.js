import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: () => import(/* webpackChunkName: "about" */ '../views/Entertainment.vue')
  },
  {
    path: '/general',
    name: 'General',
    component: () => import(/* webpackChunkName: "about" */ '../views/General.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import(/* webpackChunkName: "about" */ '../views/Business.vue')
  },
  {
    path: '/health',
    name: 'Health',
    component: () => import(/* webpackChunkName: "about" */ '../views/Health.vue')
  },
  {
    path: '/science',
    name: 'Science',
    component: () => import(/* webpackChunkName: "about" */ '../views/Science.vue')
  },
  {
    path: '/sports',
    name: 'Sports',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sports.vue')
  },
  {
    path: '/technology',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "about" */ '../views/Technology.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
