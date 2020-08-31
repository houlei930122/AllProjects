import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Details from '@/components/Details'

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
      path: '/details',   //query 传参
      name:'/details',
      component: Details
    },
    // {
    //   path: '/details/:id',  //params 传参方式
    //   name: '/details',
    //   component: Details
    // }
  ]
})
