import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

// #region styles import

import './styles/main.css'
import './styles/reset.css'
// #endregion
const app = createApp(App)

app.use(store)
app.mount('#app')
