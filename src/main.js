import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toasity, {toastContainers} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';


import App from './App.vue'
import router from './router'

import 'aos/dist/aos.css'
// import { toastContainers } from 'vue3-toastify/index'


const app = createApp(App).use(
    Vue3Toasity,
    {
      autoClose: 3000,
      // ...
    }, toastContainers
  )

app.use(createPinia())
app.use(router)
// app.component('Toaster', Toaster)

app.mount('#app')
