import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/247propertycare/',
    name: 'Home',
    component: Home
  },
  {
    path: '/247propertycare/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/247propertycare/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/247propertycare/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
