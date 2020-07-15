import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import GlobalFunctions from '../views/GlobalFunctions.vue'
import Conversor from '../views/Conversor.vue'
import Misterio6174 from '../views/Misterio6174.vue'
import Palindromo from '../views/Palindromo.vue'
import Fibonacci from '../views/Fibonacci.vue'
import ImagenMap from '../views/ImagenMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ImagenMap',
    name: 'ImagenMap',
    component: ImagenMap
  },
  {
    path: '/GlobalFunctions',
    name: 'GlobalFunctions',
    component: GlobalFunctions
  },
  {
    path: '/Conversor',
    name: 'Conversor',
    component: Conversor
  },
  {
    path: '/Palindromo',
    name: 'Palindromo',
    component: Palindromo
  },
  {
    path: '/Fibonacci',
    name: 'Fibonacci',
    component: Fibonacci
  },
  {
    path: '/Misterio6174',
    name: 'Misterio6174',
    component: Misterio6174
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
    path: '/about2',
    name: 'About2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
