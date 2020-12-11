import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,  //设置严格模式，禁止不规范的修改
  namespaced: true,
  modules: {    //模块化

  },
  plugins: [],  //插件
  state: {  //状态
    num1:1
  },
  mutations: {    //触发mutations里面的方法，使用this.$store.commit('login')


  },
  actions: {  //触发actions里面的，方法使用。dispatch ,this.$store.dispatch('action', payload)
  },
})