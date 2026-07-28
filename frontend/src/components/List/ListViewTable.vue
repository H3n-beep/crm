<template>
  <div class="w-full bg-white rounded-lg border border-gray-200 overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full text-right">
        <thead class="bg-akolade-bg border-b border-gray-200">
          <tr>
            <th class="w-12 p-4">
              <input type="checkbox" class="rounded border-gray-300 text-akolade-accent focus:ring-akolade-accent" />
            </th>
            
            <th 
              v-for="col in columns" 
              :key="col.key"
              class="p-4 text-xs font-bold text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
              @click="sort(col.key)"
            >
              <div class="flex items-center gap-2">
                <span>{{ col.label }}</span>
                <Icon 
                  v-if="sortKey === col.key" 
                  :icon="sortOrder === 'asc' ? 'chevron-up' : 'chevron-down'" 
                  class="w-3 h-3 text-akolade-accent"
                />
              </div>
            </th>

            <th class="p-4 w-20 text-left">عملیات</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr 
            v-for="row in rows" 
            :key="row.id"
            class="hover:bg-akolade-bg transition-colors group"
          >
            <td class="p-4">
              <input type="checkbox" class="rounded border-gray-300 text-akolade-accent" />
            </td>
            
            <td 
              v-for="col in columns" 
              :key="col.key"
              class="p-4 text-sm text-akolade-primary whitespace-nowrap"
            >
              {{ renderCell(row, col) }}
            </td>

            <td class="p-4 text-left">
              <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button class="p-1.5 text-gray-400 hover:text-akolade-accent rounded hover:bg-white shadow-sm">
                  <Icon icon="edit" class="w-4 h-4" />
                </button>
                <button class="p-1.5 text-gray-400 hover:text-red-500 rounded hover:bg-white shadow-sm">
                  <Icon icon="trash" class="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="p-4 border-t border-gray-200 flex items-center justify-between bg-white">
      <span class="text-sm text-gray-500">
        نمایش {{ toPersianNum(start) }} تا {{ toPersianNum(end) }} از {{ toPersianNum(total) }}
      </span>
      
      <button 
        class="fixed left-6 bottom-6 bg-akolade-accent hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all flex items-center gap-2 z-50"
        @click="$emit('create')"
      >
        <Icon icon="plus" class="w-6 h-6" />
        <span class="font-bold pr-2 hidden md:inline">افزودن مورد جدید</span>
      </button>

      <div class="flex items-center gap-2">
        <button class="p-2 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50">
          <Icon icon="chevron-left" class="w-4 h-4" />
        </button>
        <button class="p-2 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-50">
          <Icon icon="chevron-right" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { toPersianNum } from '@/utils/numbers';

const props = defineProps({ 
  rows: Array, 
  columns: Array,
  start: Number,
  end: Number,
  total: Number
});

const emit = defineEmits(['create', 'sort']);

const sortKey = ref(null);
const sortOrder = ref('asc');

const sort = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'asc';
  }
  emit('sort', { key: sortKey.value, order: sortOrder.value });
};

const renderCell = (row, col) => {
  const val = row[col.key];
  return typeof val === 'number' ? toPersianNum(val) : val;
};
</script>
