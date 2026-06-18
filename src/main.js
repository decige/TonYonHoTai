import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import "@/assets/less/index.less"

import router from "./router/index.js"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import  axios from "axios"
//注释mock就失效了
import "@/api/mock.js";

const pinia = createPinia()

const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app');