<template>
  <div>
    <h1>Client List</h1>

    <ClientList />

    <!-- Pagination -->
    <PaginationNumber />

    <!-- Loading -->

  </div>
</template>

<script setup lang="ts">
import ClientList from '../components/ClientList.vue';
import PaginationNumber from '../components/PaginationNumber.vue';

</script>

<style scoped>

</style>
