import { createRouter, createWebHistory } from 'vue-router'
import Counter1 from '@/counter/pages/CounterValue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: Counter1
    },
  ]
})

export default router
