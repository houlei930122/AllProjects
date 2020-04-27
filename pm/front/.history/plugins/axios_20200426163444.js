import Vue from 'vue'
import axios from 'axios'
import { MessageBox } from 'element-io'
const service = axios.create({
  //timeout:1000,
  baseURL: '/api',
})

//请求拦截

//主要做token的管理
service.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token // 'Bearer '是jwt的规范
    }
    return config
  }
)
//响应拦截
service.interceptors.response.use(
  async response => {
    let { data } = response
    if (data.code === -666) {
      MessageBox.confirm('登录已过期', '过期', {
        confirmButtonText: '登录',
        showCancelButton: false,
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        redirect({ path: '/login' })
      })
    }
    return data
  }
)




//将axios定义到Vue的原理链上，在以后的使用，不需要引用axios，直接this.$http.post()
Vue.prototype.$http = service

export const http = service




