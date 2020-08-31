import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Details from '@/components/Details'

Vue.use(Router)

const router = new Router({
  mode:'hash',  //history,hash 两种路由方式
  // base:'/项目-else/dist',
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





// router.beforeEach((to, from, next) => {
//   //to and from are Route Object,next() must be called to resolve the hook}
//   console.log(to);
//   console.log(from);
//   next()
// })


export default router
