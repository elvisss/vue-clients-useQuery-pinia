import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useQuery } from '@tanstack/vue-query'
import clientsApi from '@/api/clients-api'
import type { Client } from '../interfaces/client'
import { useClientsStore } from '@/store/clients'

const getClients = async(page: number): Promise<Client[]> => {
  await new Promise(resolve => {
    setTimeout(() => resolve(true), 1500)
  })

  const { data } = await clientsApi.get<Client[]>('/clients', {
    params: {
      _page: page
    }
  })
  return data
}

const useClients = () => {
  const store = useClientsStore()
  const { clients, currentPage, totalPages } = storeToRefs(store)

  const { isLoading, data } = useQuery({
    queryKey: ['clients?page=', currentPage],
    queryFn: () => getClients(currentPage.value),
    /* staleTime: 1000 * 60, */
  })

  watch(data, (clients) => {
    console.log('new watch')
    if (clients) {
      store.setClients(clients)
    }
  })

  return {
    // properties
    isLoading,
    clients,
    currentPage,
    totalPages,

    // methods
    getPage: store.setPage
  }
}

export default useClients
