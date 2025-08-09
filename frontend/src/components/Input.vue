<template>
  <div class="relative">
    <component 
      v-if="icon" 
      :is="icon" 
      class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" 
    />
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :class="[
        'w-full border border-gray-200 rounded-2xl focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-gray-50 focus:bg-white',
        icon ? 'pl-10' : 'pl-4',
        'pr-4 py-3',
        { 'opacity-50 cursor-not-allowed': disabled }
      ]"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur', $event)"
      @focus="$emit('focus', $event)"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [String, Object],
    default: null
  }
})

defineEmits(['update:modelValue', 'blur', 'focus'])
</script>
