import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalDirectives from './directives'

const app = createApp(App)

app.use(router)
app.use(globalDirectives)

app.config.globalProperties.blogURL = "http://localhost:5000/posts"
app.config.globalProperties.twitterURL = "http://localhost:5000/tweets"
app.config.globalProperties.$log = console.log

app.mount('#app')
