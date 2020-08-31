export default{
  namespaced: true,// s设置独立的命名空间
  state: {     //获取使用 this.$store.state.user.isLogin
    isLogin: false,
    username:''
  },
  mutations: {    //模块化后的使用方法，使用this.$store.commit('user/login')
    login(state, username) {
      state.isLogin = true,
      state.username = username
    },
    logout(state) {
      state.isLogin = false
      state.username = ''
    },
  },
  getters:{    //派生类方法，用于处理对某些状态再次加工，
    welcome:state=> state.username+' 欢迎回来'
  },

  actions: {  //触发actions里面的，方法使用。dispatch ,this.$store.dispatch('action', payload)
    //参数1是vuex传递的上下文context：{commit,dispatch,state}
    login({ commit }, username) {
      //模拟登录API调用。1s钟以后如果用户是admin则登录成功
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin') {
            commit('login',username)
            resolve()
          } else {
            reject()
          }
        }, 1000);
      })
    }
  },

}