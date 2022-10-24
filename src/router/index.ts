import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/HomeView.vue'),
      meta: {
        breadcrumb: [{ label: 'Dashboard' }],
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        breadcrumb: [{ label: 'About' }],
      }
    },
  ]
})

export default router
