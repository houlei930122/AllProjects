// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'
Vue.config.productionTip = false


// 注册插件
// import MyPlugin from './plugins/MyPlugin'
// Vue.use(MyPlugin)

import MyHttpServer from './plugins/MyHttpServer'
Vue.use(MyHttpServer)

import MyVuexPlugin from './plugins/MyVuexPlugin'
Vue.use(MyVuexPlugin)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
