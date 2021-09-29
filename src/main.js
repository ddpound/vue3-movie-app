import {createApp} from 'vue'
import App from './App'
import router from './routes/index.js'

createApp(App)
    .use(router) // index.js 연결
    .mount('#app')