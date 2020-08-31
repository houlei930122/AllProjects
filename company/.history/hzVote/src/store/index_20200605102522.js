import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    isLogin:false
  },
  mutations: {    //触发mutations里面的方法，使用this.$store.commit('login')
    login(state){
      state.isLogin = true
    },
    logout(state){
      state.isLogin = false
    }
  },
  actions:{  //触发actions里面的，方法使用。dispatch ,this.$store.dispatch('action', payload)
    //参数1是vuex传递的上下文context：{commit,dispatch,state}

    login({ commit }, username){
      //模拟登录API调用。1s钟以后如果用户是admin则登录成功
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          if(username === 'admin'){
            commit('login')
            resolve()
          }else{
            reject()
          }
        }, 1000);
      })
    }
  },
  modules: {
    user,
  }


})