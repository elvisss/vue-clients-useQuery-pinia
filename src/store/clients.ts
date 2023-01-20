import type { Client } from './../clients/interfaces/client'
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useClientsStore = defineStore('clients', () => {
  const currentPage = ref<number>(1)
  const totalPages = ref<number>(5)
  const clients = ref<Client[]>([])

  return {
    // State
    currentPage,
    totalPages,
    clients,

    // Getters
    /* squareCount: computed(() => count.value * count.value), */

    // Actions
    setClients(newClientes: Client[]) {
      clients.value = newClientes
    },
    setPage(page: number) {
      if (currentPage.value === page) return
      currentPage.value = page
    }
  }
})
