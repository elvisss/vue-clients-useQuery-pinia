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
import useClients from '../composables/useClients'

const { isLoading, clients } = useClients()
</script>

<style scoped></style>
