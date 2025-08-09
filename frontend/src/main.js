import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/main.css'

// Khởi tạo AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
