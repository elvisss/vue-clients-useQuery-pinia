<template>
  <h1>The value is: {{ counterStore.count }}</h1>
  <h4>The last changed was: {{ counterStore.lastChanged }}</h4>
</template>

<script setup lang="ts">
import { useCounterOptionsStore } from '@/store/counter-options';

const counterStore = useCounterOptionsStore()
</script>

<style scoped>

</style>
