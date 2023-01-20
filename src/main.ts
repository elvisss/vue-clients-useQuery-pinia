import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1 * 60 * 1000, // 1 minute
        refetchOnReconnect: 'always',
        refetchOnWindowFocus: false,
        retry: 0,
      },
    }
  }
})

app.mount('#app')
