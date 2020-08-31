import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/rules',
      name:'Rules',
      component: ()=>import('@/components/Rules')
    },
    {
      path:'/votelist',
      name:'VoteList',
      component:()=>import('@/components/VoteList')
    },
    {
      path:'/details/:id',
      name:'Details',
      component:()=>import('@/components/Details')
    }
  ]
})
