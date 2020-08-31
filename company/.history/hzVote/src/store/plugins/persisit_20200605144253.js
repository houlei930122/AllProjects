export default store => {
  //store 初始化的时候，将存储在localStorage中的状态还原
  if(localStorage){
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      store.commit('user/login', user.username)
    }
  }

  //如果用户相关状态发生变化，自动存入localStorage
  // store.subscribe(handler) 是用来监听mutation的变化，变化了就会触发subscribe
  store.subscribe((mutation,state)=>{
    //{type:'user/login'}
    //{type:'user/logout'}
    //{type:'cart/addCart'}
    if(mutation.type === 'user/login'){
      const user = JSON.stringify(state.user)
      localStorage.setItem('user',user)
    }else if(mutation.type === 'user/logout'){
      localStorage.removeItem('user')
    }
  })


}