<template>
  <div class="flex h-full overflow-x-auto overflow-y-hidden gap-6 p-6 bg-akolade-bg" dir="rtl">
    <div 
      v-for="column in columns" 
      :key="column.name"
      class="flex-shrink-0 w-80 flex flex-col max-h-full"
    >
      <div class="flex items-center justify-between mb-4 px-2">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: column.color }"></span>
          <h3 class="font-bold text-akolade-primary">{{ column.title }}</h3>
          <span class="text-xs text-gray-400 bg-white px-2 py-0.5 rounded-full border border-gray-100">
            {{ toPersianNum(column.cards.length) }}
          </span>
        </div>
        <button class="text-gray-400 hover:text-akolade-accent">
          <Icon icon="dots-horizontal" />
        </button>
      </div>

      <div 
        class="flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar"
        @dragover.prevent
        @drop="onDrop($event, column.name)"
      >
        <KanbanCard 
          v-for="card in column.cards" 
          :key="card.id"
          :card="card"
          class="bg-[#F8FAFC] border border-[#0F172A] rounded-lg shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { toPersianNum } from '@/utils/numbers';
import KanbanCard from './KanbanCard.vue';

defineProps({
  columns: Array
});

const emit = defineEmits(['drop']);

const onDrop = (event, columnName) => {
  const cardId = event.dataTransfer.getData('cardId');
  emit('drop', { cardId, columnName });
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #F1F5F9;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94A3B8;
}
</style>
