<template>
  <h1>The value is: {{ counterStore.count }}</h1>
  <h4>The last changed was: {{ counterStore.lastChanged }}</h4>
</template>

<script setup lang="ts">
import { useCounterSetupStore } from '@/store/counter-setup';

const counterStore = useCounterSetupStore()
</script>

<style scoped>

</style>
