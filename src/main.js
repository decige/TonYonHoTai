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
//import "@/api/mock.js";
//挂载axios到全局,在组件中就可以直接使用this.$axios来发送请求了
import api from "@/api/api.js";
//这样做的好处是如果以后要修改接口地址或者添加公共参数等操作,只需要修改这个文件就可以了,不用每个组件都去修改了

const pinia = createPinia()

const app=createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
//注册全局组件
app.config.globalProperties.$api = api;
app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app');