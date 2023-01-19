<template>
  <h1>Counter 1 Page: {{ count }}</h1>
  <h4>Square: {{ squareCount }}</h4>
  <button @click="increment()">+1</button>
  <button @click="incrementBy(10)">+10</button>
  <button @click="counterStore.$reset()">Reset</button>

  <CounterOptionsValue />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterOptionsStore } from '@/store/counter-options'
import CounterOptionsValue from '../components/CounterOptionsValue.vue'

const counterStore = useCounterOptionsStore()

const { count, squareCount } = storeToRefs(counterStore)
const { increment, incrementBy } = counterStore
</script>

<style scoped>
button {
  margin-right: 5px;
}
</style>
