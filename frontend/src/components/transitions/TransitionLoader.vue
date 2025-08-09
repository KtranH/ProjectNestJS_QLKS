<template>
  <div 
    v-if="isLoading" 
    class="transition-loader"
    :class="{ 'fade-out': isFadingOut }"
  >
    <div class="loader-content">
      <div class="spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <p class="loading-text">Đang tải...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoading = ref(false)
const isFadingOut = ref(false)

// Theo dõi thay đổi route để hiển thị loading
watch(() => route.path, async (newPath, oldPath) => {
  if (newPath !== oldPath) {
    isLoading.value = true
    isFadingOut.value = false
    
    // Giả lập thời gian loading (có thể điều chỉnh)
    setTimeout(() => {
      isFadingOut.value = true
      setTimeout(() => {
        isLoading.value = false
        isFadingOut.value = false
      }, 300)
    }, 500)
  }
})
</script>

<style scoped>
.transition-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.3s ease;
}

.transition-loader.fade-out {
  opacity: 0;
}

.loader-content {
  text-align: center;
}

.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-ring:nth-child(2) {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-top-color: #10b981;
  animation-delay: -0.3s;
}

.spinner-ring:nth-child(3) {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-top-color: #f59e0b;
  animation-delay: -0.6s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-text {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .spinner {
    width: 50px;
    height: 50px;
  }
  
  .loading-text {
    font-size: 12px;
  }
}
</style>
