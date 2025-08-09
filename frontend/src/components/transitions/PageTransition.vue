<template>
  <transition
    name="page-slide"
    mode="out-in"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    @before-leave="beforeLeave"
  >
    <slot />
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Props để tùy chỉnh animation
const props = defineProps({
  duration: {
    type: Number,
    default: 0.6
  },
  useGSAP: {
    type: Boolean,
    default: true
  }
})

const gsap = ref(null)

onMounted(async () => {
  if (props.useGSAP) {
    try {
      const gsapModule = await import('gsap')
      gsap.value = gsapModule.default
    } catch (error) {
      console.warn('GSAP không khả dụng, sử dụng CSS animation')
    }
  }
})

const beforeEnter = (el) => {
  if (gsap.value) {
    gsap.value.set(el, {
      x: '100%',
      opacity: 0
    })
  } else {
    // Fallback CSS
    el.style.transform = 'translateX(100%)'
    el.style.opacity = '0'
  }
}

const beforeLeave = (el) => {
  if (gsap.value) {
    gsap.value.set(el, {
      x: '0%',
      opacity: 1
    })
  }
}

const enter = (el, done) => {
  if (gsap.value) {
    gsap.value.to(el, {
      duration: props.duration,
      x: '0%',
      opacity: 1,
      ease: 'power2.out',
      onComplete: done
    })
  } else {
    // Fallback CSS animation
    el.style.transition = `transform ${props.duration}s ease-out, opacity ${props.duration}s ease-out`
    el.style.transform = 'translateX(0%)'
    el.style.opacity = '1'
    
    setTimeout(done, props.duration * 1000)
  }
}

const leave = (el, done) => {
  if (gsap.value) {
    gsap.value.to(el, {
      duration: props.duration * 0.7, // Leave animation nhanh hơn enter
      x: '-100%',
      opacity: 0,
      ease: 'power2.in',
      onComplete: done
    })
  } else {
    // Fallback CSS animation
    el.style.transition = `transform ${props.duration * 0.7}s ease-in, opacity ${props.duration * 0.7}s ease-in`
    el.style.transform = 'translateX(-100%)'
    el.style.opacity = '0'
    
    setTimeout(done, props.duration * 0.7 * 1000)
  }
}
</script>

<style scoped>
.page-slide-enter-active,
.page-slide-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.page-slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.page-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Fallback CSS animation nếu không có GSAP */
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutToLeft {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}

/* CSS-only fallback */
.page-slide-enter-active:not(.gsap-enabled) {
  animation: slideInFromRight 0.6s ease-out;
}

.page-slide-leave-active:not(.gsap-enabled) {
  animation: slideOutToLeft 0.4s ease-in;
}

/* Tối ưu performance */
.page-slide-enter-active,
.page-slide-leave-active {
  will-change: transform, opacity;
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
