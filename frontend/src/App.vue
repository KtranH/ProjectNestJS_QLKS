<template>
  <div class="min-h-full bg-gradient-to-br from-gray-50 to-gray-100">
    <main class="relative overflow-hidden">
      <PageTransition 
        :duration="0.6"
        :use-gsap="true"
      >
        <router-view :key="$route.fullPath" />
      </PageTransition>
    </main>
    
    <!-- Transition Loader -->
    <TransitionLoader />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageTransition from '@/components/transitions/PageTransition.vue'
import TransitionLoader from '@/components/transitions/TransitionLoader.vue'

const route = useRoute()

// Lấy transition type từ route meta
const transitionType = computed(() => {
  return route.meta.transition || 'slide-right'
})
</script>

<style>
/* Đảm bảo router-view có position relative để transition hoạt động đúng */
.router-view-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

/* Tối ưu performance cho animation */
* {
  will-change: transform, opacity;
}

/* Smooth scrolling cho toàn bộ ứng dụng */
html {
  scroll-behavior: smooth;
}

/* Đảm bảo body không có overflow để tránh scrollbar nhấp nháy */
body {
  overflow-x: hidden;
}

/* Thêm một số hiệu ứng loading cho transition */
.page-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Tối ưu cho mobile */
@media (max-width: 768px) {
  .page-slide-enter-active,
  .page-slide-leave-active {
    transition-duration: 0.4s;
  }
}
</style>
