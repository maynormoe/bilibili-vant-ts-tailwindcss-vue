import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import Router from "@/router";

import '@/assets/css/tailwindcss.css'

const app = createApp(App)

app.use(createPinia())
app.use(Router)

app.mount('#app')
