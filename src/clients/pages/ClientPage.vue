<template>
  <h3 v-if="clientMutation.isLoading.value">Saving...</h3>
  <h3 v-if="clientMutation.isSuccess.value">Saved</h3>

  <LoadingModal v-if="isLoading" />

  <div v-if="client">
    <h1>name</h1>
    <form @submit.prevent="clientMutation.mutate(client!)">
      <input
        type="text"
        v-model="client.name"
        placeholder="Name"
        name=""
        id=""
      />
      <br />
      <input
        type="text"
        v-model="client.address"
        placeholder="Address"
        name=""
        id=""
      />
      <br />
      <button :disabled="clientMutation.isLoading.value" type="submit">
        Save
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LoadingModal from '@/shared/components/LoadingModal.vue'
import useClient from '../composables/useClient'

const route = useRoute()
const router = useRouter()

const { isLoading, isError, client, clientMutation } = useClient(+route.params.id)

watch(isError, () => {
  if (isError.value) {
    router.replace('/clients')
  }
})

</script>

<style scoped>
input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
</style>
