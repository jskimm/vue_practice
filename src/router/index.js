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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/DatasetMain',
    name: 'DatasetMain',
    component: () => import('../views/DatasetMain.vue')
  },
  {
    path: '/DatasetInfo',
    name: 'DatasetInfo',
    component: () => import('../views/DatasetInfo.vue')
  },
  {
    path: '/Test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/Demo',
    name: 'Demo',
    component: () => import('../views/Demo.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
