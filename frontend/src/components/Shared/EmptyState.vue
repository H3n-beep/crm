<script setup>
defineProps({
  title: {
    type: String,
    default: 'هنوز موردی اضافه نشده است' // Default: "Nothing added yet"
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center w-full py-16 px-4 text-center">
    <!-- Background Decorative Icon -->
    <div class="relative mb-6">
      <!-- Large subtle background brace -->
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        class="opacity-10 text-akolade-primary"
      >
        <path 
          d="M30 20C30 20 10 30 10 50C10 70 30 80 30 80" 
          stroke="currentColor" 
          stroke-width="8" 
          stroke-linecap="round" 
        />
        <path 
          d="M70 20C70 20 90 30 90 50C90 70 70 80 70 80" 
          stroke="currentColor" 
          stroke-width="8" 
          stroke-linecap="round" 
        />
      </svg>
      
      <!-- Smaller foreground accent (optional) -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-3 h-3 rounded-full bg-akolade-accent opacity-20"></div>
      </div>
    </div>

    <!-- Text Content -->
    <h3 class="text-lg font-bold text-akolade-primary mb-2">
      {{ title }}
    </h3>
    
    <p v-if="subtitle" class="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
      {{ subtitle }}
    </p>

    <!-- Slot for Action Buttons (e.g., "Create New") -->
    <div class="mt-6">
      <slot name="action"></slot>
    </div>
  </div>
</template>
