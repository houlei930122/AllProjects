import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = (Vue) =>{
  axios.defaults.baseURL = 'https://adpaiprojects.thepaper.cn/' 
  // 添加实例方法，不使用混入的形式，prototype可以传参
  Vue.prototype.$http = axios
}
export default MyHttpServer