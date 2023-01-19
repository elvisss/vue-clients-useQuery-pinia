import { createRouter, createWebHistory } from 'vue-router'
import CounterOptionsPage from '@/counter/pages/CounterOptionsPage.vue'
import CounterSetupPage from '@/counter/pages/CounterSetupPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter-1',
      component: CounterOptionsPage
    },
    {
      path: '/setup',
      name: 'counter-2',
      component: CounterSetupPage
    },
  ]
})

export default router
