import Vue from 'vue'
import axios from 'axios'
import { MessageBox } from 'element-ui'
const service = axios.create({
  //timeout:1000, //超时
  baseURL: '/api',
})
//请求拦截
export default ({store, redirect}) => {   //可以传递redirect方法
  //主要做token的管理
  //拦截提交，在请求的时候在请求头上添加token参数
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
  //拦截返回数据，可以过滤掉不需要的参数，
  service.interceptors.response.use(
    async response => {
      let { data } = response   //过滤其他消息，只返回后端返回的数据部分
      if (data.code === -666) {   //做全局的接口返回参数校验，验证登录是否过期
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
}
//将axios定义到Vue的原理链上，在以后的使用，不需要引用axios，直接this.$http.post()
Vue.prototype.$http = service
export const http = service




