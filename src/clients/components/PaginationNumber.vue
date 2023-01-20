<template>
  <div>
    <button
      :disabled="currentPage === 1"
      @click="getPage(currentPage - 1)"
    >
      Previous
    </button>

    <button
      v-for="number of totalPages"
      :key="number"
      @click="getPage(number)"
      :class="{ active: number === currentPage }"
    >
      {{ number }}
    </button>

    <button
      :disabled="currentPage === totalPages"
      @click="getPage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import useClients from '../composables/useClients';

const { getPage, totalPages, currentPage } = useClients()
</script>

<style scoped>
div {
  margin-top: 10px;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  margin-right: 5px;
  padding: 10px;
  transition: all .5s;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

button:disabled,
button.disabled {
  cursor: not-allowed;
  user-select: none;
  opacity: 0.3;
  background-color: #b8b8b8;
  color: black;
}

button.active {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
