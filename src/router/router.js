import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Education from '../components/Education.vue'
import Projects from '../components/Projects.vue'
import Goals from '../components/Goals.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/education',
    component: Education
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/goals',
    component: Goals
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
 })

export default router