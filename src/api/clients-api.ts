import axios from 'axios'

const CLIENTS_URL = import.meta.env.VITE_API_URL

const clientsApi = axios.create({
  baseURL: CLIENTS_URL,
})

export default clientsApi
