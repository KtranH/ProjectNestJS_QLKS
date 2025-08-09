<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      sizeClasses[size],
      variantClasses[variant],
      { 'opacity-50 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <LoadingSpinner v-if="loading" class="w-4 h-4 mr-2" />
    <component v-else-if="icon" :is="icon" class="w-4 h-4 mr-2" />
    <slot />
  </button>
</template>

<script setup>
import LoadingSpinner from './LoadingSpinner.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [String, Object],
    default: null
  }
})

defineEmits(['click'])

const sizeClasses = {
  sm: 'px-3 py-2 text-sm rounded-xl',
  md: 'px-4 py-2.5 text-sm rounded-2xl',
  lg: 'px-6 py-3 text-base rounded-2xl'
}

const variantClasses = {
  primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black shadow-medium hover:shadow-strong',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 shadow-soft',
  outline: 'border border-gray-200 text-gray-700 hover:bg-gray-50 focus:ring-gray-500 bg-white',
  ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
}
</script>
