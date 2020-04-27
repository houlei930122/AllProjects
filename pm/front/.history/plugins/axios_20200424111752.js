import Vue from 'vue'
import axios from 'axios'
const service = axios.create({
  //timeout:1000,
  baseURL:'/api',
})

//请求拦截
//主要做token的管理


//响应拦截
service.interceptors.response.use(
  async response=>{
    let {data} = response
    return data
  }
)

//将axios定义到Vue的原理链上，在以后的使用，不需要引用axios，直接this.$http.post()
Vue.prototype.$http = service

export const http = service




