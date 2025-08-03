import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/rooms',
      name: 'rooms',
      component: () => import('@/views/RoomsView.vue')
    },
    {
      path: '/guests',
      name: 'guests',
      component: () => import('@/views/GuestsView.vue')
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: () => import('@/views/BookingsView.vue')
    }
  ]
})

export default router 