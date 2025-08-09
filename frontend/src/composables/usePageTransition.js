import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export function usePageTransition() {
  const route = useRoute()
  const transitionType = ref('slide-right')
  const transitionDuration = ref(0.6)
  
  // Các loại transition có sẵn
  const transitionTypes = {
    'slide-right': {
      enter: { x: '100%', opacity: 0 },
      leave: { x: '-100%', opacity: 0 },
      ease: 'power2.out'
    },
    'slide-left': {
      enter: { x: '-100%', opacity: 0 },
      leave: { x: '100%', opacity: 0 },
      ease: 'power2.out'
    },
    'fade': {
      enter: { opacity: 0 },
      leave: { opacity: 0 },
      ease: 'power2.out'
    },
    'scale': {
      enter: { scale: 0.8, opacity: 0 },
      leave: { scale: 1.2, opacity: 0 },
      ease: 'back.out(1.7)'
    }
  }

  // Tự động xác định transition type dựa trên route
  const getTransitionType = (to, from) => {
    // Logic để xác định hướng transition dựa trên route
    const routeOrder = ['home', 'login', 'register', 'dashboard']
    const toIndex = routeOrder.indexOf(to.name)
    const fromIndex = routeOrder.indexOf(from?.name)
    
    if (toIndex > fromIndex) {
      return 'slide-right'
    } else if (toIndex < fromIndex) {
      return 'slide-left'
    }
    
    return 'fade'
  }

  // Cập nhật transition type dựa trên route change
  const updateTransitionType = (to, from) => {
    transitionType.value = getTransitionType(to, from)
  }

  // Lấy cấu hình transition hiện tại
  const currentTransition = computed(() => {
    return transitionTypes[transitionType.value] || transitionTypes['slide-right']
  })

  return {
    transitionType,
    transitionDuration,
    transitionTypes,
    currentTransition,
    updateTransitionType,
    getTransitionType
  }
}
