import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router'
import { Button, Layout, Menu, Space, Form, Input, message } from 'ant-design-vue'

const pinia = createPinia()
// 数据持久化
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Button).use(Layout).use(Menu).use(Space).use(Form).use(Input)
app.config.globalProperties.$message = message
app.mount('#app')
