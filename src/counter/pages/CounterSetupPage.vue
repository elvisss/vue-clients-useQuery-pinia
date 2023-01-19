<template>
  <h1>Counter Setup: {{ count }}</h1>
  <h4>Square: {{ squareCount }}</h4>
  <button @click="increment()">+1</button>
  <button @click="incrementBy(10)">+10</button>
  <button @click="counterStore.$reset()">Reset</button>

  <CounterSetupValue />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterSetupStore } from '@/store/counter-setup'
import CounterSetupValue from '../components/CounterSetupValue.vue'

const counterStore = useCounterSetupStore()

const { count, squareCount } = storeToRefs(counterStore)
const { increment, incrementBy } = counterStore
</script>

<style scoped>
button {
  margin-right: 5px;
}
</style>
