// import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import Count from './Count.vue'
// import router from './router'
// import router from './router'

const app = createApp(Count)

// app.use(createPinia())
app.use(router)

app.mount('#app')
