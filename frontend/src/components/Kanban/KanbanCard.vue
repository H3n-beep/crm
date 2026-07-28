<template>
  <div class="p-4 group relative">
    <div class="flex justify-between items-start mb-3">
      <h4 class="font-semibold text-akolade-primary leading-snug">{{ card.title }}</h4>
      <button class="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-akolade-accent transition-opacity">
        <Icon icon="more-vertical" class="w-4 h-4" />
      </button>
    </div>

    <div class="flex items-center gap-3 text-xs text-gray-500 mb-4">
      <div class="flex items-center gap-1.5">
        <Icon icon="calendar" class="w-3.5 h-3.5" />
        <span>{{ formatDate(card.date) }}</span>
      </div>
      
      <div class="me-auto font-mono text-akolade-accent bg-indigo-50 px-2 py-0.5 rounded">
        {{ toPersianNum(card.amount) }} ₽
      </div>
    </div>

    <div class="flex items-center justify-between pt-3 border-t border-gray-50">
      <div class="flex -space-x-2 space-x-reverse"> 
        <img :src="card.assignee.image" class="w-6 h-6 rounded-full border-2 border-white" />
      </div>
      
      <div class="flex gap-2">
        <span v-if="card.priority" 
          class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
          :class="{
            'bg-red-50 text-red-600': card.priority === 'High',
            'bg-yellow-50 text-yellow-600': card.priority === 'Medium',
            'bg-green-50 text-green-600': card.priority === 'Low'
          }"
        >
          {{ card.priority }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toPersianNum } from '@/utils/numbers';

defineProps({
  card: Object
});

const formatDate = (dateStr) => {
  return dateStr;
};
</script>
