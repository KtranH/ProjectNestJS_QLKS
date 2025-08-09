<template>
  <div class="flex items-center justify-center">
    <div class="relative">
      <div class="w-8 h-8 border-2 border-gray-200 rounded-full"></div>
      <div class="absolute top-0 left-0 w-8 h-8 border-2 border-black rounded-full border-t-transparent animate-spin"></div>
    </div>
    <span v-if="text" class="ml-3 text-gray-600 font-medium">{{ text }}</span>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>
