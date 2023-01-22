import { ref, watch } from 'vue'
import { useMutation, useQuery } from '@tanstack/vue-query'
import clientsApi from "@/api/clients-api"
import type { Client } from '../interfaces/client'

const getClient = async(id: number) => {
  const { data } = await clientsApi.get<Client>(`/clients/${id}`)
  return data
}

const updateClient = async (client: Client): Promise<Client> => {
  const { data } = await clientsApi.patch<Client>(
    `/clients/${client.id}`,
    client
  )

  /* const queries = queryClient
    .getQueryCache()
    .findAll(['clients?page='], { exact: false })

  queries.forEach(q => q.reset()) */

  return data
}

const useClient = (id: number) => {
  const client = ref<Client>()

  const { isLoading, data, isError } = useQuery({
    queryKey: ['client', id],
    queryFn: () => getClient(id),
    /* onSuccess(data) {
      client.value = data
    } */
    onError(error: any) {
      console.log(error)
    }
  })

  const clientMutation = useMutation(updateClient)

  watch(clientMutation.isSuccess, () => {
    setTimeout(() => {
      clientMutation.reset()
    }, 1000)
  })

  watch(data, () => {
    if (data.value) {
      client.value = { ...data.value }
    }
  }, { immediate: true })

  return {
    isLoading,
    client,
    isError,
    clientMutation,
  }
}

export default useClient
