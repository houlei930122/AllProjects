import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/s',
      name:'second',
      component: () => import('@/components/Second')
    },{
      path:'/feiyi',
      name:'feiyi',
      component:() => import('@/components/Feiyi')
    }
  ]
})
