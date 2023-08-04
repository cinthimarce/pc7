import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import Departamentos from '@/views/Departamentos.vue'
import Empleados from '@/views/Empleados.vue'
import Turnos from '@/views/Turnos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/departamentos',
    name: 'departamentos',
    component: Departamentos
  },
  {
    path: '/empleados',
    name: 'empleados',
    component: Empleados
  },
  {
    path: '/turnos',
    name: 'turnos',
    component: Turnos
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
    path:'*',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
