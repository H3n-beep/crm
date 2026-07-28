<script setup>
defineProps({
  width: {
    type: String,
    default: '32'
  },
  height: {
    type: String,
    default: '32'
  },
  className: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <svg 
    :width="width" 
    :height="height" 
    viewBox="0 0 40 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    aria-label="Akolade CRM Logo"
  >
    <!-- Background Circle (Optional, subtle) -->
    <circle cx="20" cy="20" r="20" fill="#EEF2FF" fill-opacity="0.4" />
    
    <!-- The Braces {} -->
    <path 
      d="M14 12C14 12 10 14 10 20C10 26 14 28 14 28" 
      stroke="#6366F1" 
      stroke-width="3" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    <path 
      d="M26 12C26 12 30 14 30 20C30 26 26 28 26 28" 
      stroke="#6366F1" 
      stroke-width="3" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    />
    
    <!-- Optional: Small dot inside to represent data point -->
    <circle cx="20" cy="20" r="2.5" fill="#6366F1" />
  </svg>
</template>
