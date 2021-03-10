import { createApp } from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './registerServiceWorker'

const app = createApp(App)

app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

