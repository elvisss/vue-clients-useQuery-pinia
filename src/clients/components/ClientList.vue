<template>
  <ul>
    <li
      v-for="client of clients"
      :key="client.id"
    >
      <RouterLink
        :to="{
          name: 'client-id',
          params: {
            id: client.id,
          },
        }"
      >
        {{ client.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import type { Client } from '../interfaces/client';

interface Props {
  clients: Client[]
}

const props = defineProps<Props>()
const clients = toRef(props, 'clients')
</script>

<style scoped></style>
