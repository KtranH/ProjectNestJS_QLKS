import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      redirect: '/home',
      meta: { transition: 'fade' }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/DashboardView.vue'),
      meta: { 
        transition: 'slide-right',
        title: 'Trang chủ'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { 
        transition: 'slide-right',
        title: 'Đăng nhập'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta: { 
        transition: 'slide-right',
        title: 'Đăng ký'
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { 
        transition: 'slide-right',
        title: 'Dashboard'
      }
    }
  ]
})

// Router guard để cập nhật transition type
router.beforeEach((to, from, next) => {
  // Cập nhật title trang
  if (to.meta.title) {
    document.title = `${to.meta.title} - Hotel Management`
  }
  
  next()
})

export default router
