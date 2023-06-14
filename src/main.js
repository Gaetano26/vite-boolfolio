import './assets/styles/main.scss'

import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
//import router from './router'

//const app = createApp(App)

//app.use(router)

//app.mount('#app')
createApp(App).use(router).mount('#app');
