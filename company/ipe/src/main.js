import { createApp } from 'vue'
import App from './App.vue'
// import axios from 'axios'
//配置之后的axios
import axios from './js/axios.js';
const app = createApp(App)
//添加 全局axios方法
//方法1
// app.config.globalProperties.$axios = axios
// 方法2
app.provide('$axios', axios)


app.mount('#app')
