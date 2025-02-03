import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '../src/router/index'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')