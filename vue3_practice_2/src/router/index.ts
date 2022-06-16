import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('../views/Practice/PracticeView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/Practice/CounterPage.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Practice/SearchPage.vue')
  },
  {
    path: '/filterDemo',
    name: 'filterDemo',
    component: () => import('../views/Practice/FilterDemo.vue')
  },
  {
    path: '/listDemo',
    name: 'listDemo',
    component: () => import('../views/Practice/ListDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
