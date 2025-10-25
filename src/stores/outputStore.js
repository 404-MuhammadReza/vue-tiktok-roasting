// stores/formStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useOutputStore = defineStore('output', () => {
  const value = ref('');

  return { value };
});