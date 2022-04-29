import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../components/Home.vue'
import EducationView from '../components/Education.vue'
import ProjectsView from '../components/Projects.vue'
import GoalsView from '../components/Goals.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/education',
    component: EducationView
  },
  {
    path: '/projects',
    component: ProjectsView
  },
  {
    path: '/goals',
    component: GoalsView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
 })

export default router