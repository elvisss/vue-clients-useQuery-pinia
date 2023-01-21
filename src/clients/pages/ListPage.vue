<template>
  <div>
    <h1>Client List</h1>

    <ClientList :clients="clients" />

    <!-- Pagination -->
    <PaginationNumber
      :total-pages="totalPages"
      :current-page="currentPage"
      @page-changed="getPage"
    />

    <!-- Loading -->
    <LoadingModal v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import ClientList from '../components/ClientList.vue'
import PaginationNumber from '../components/PaginationNumber.vue'
import LoadingModal from '@/shared/components/LoadingModal.vue'
import useClients from '../composables/useClients';

const { isLoading, clients, totalPages, currentPage, getPage } = useClients()
</script>

<style scoped></style>
