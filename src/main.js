import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './assets/reset.css'
import './assets/styles.css'


createApp(App)
  .use(store)
  .mount('#app')
