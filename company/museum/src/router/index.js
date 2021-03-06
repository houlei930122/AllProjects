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
      path:'/heritage',
      name:'heritage',
      component: () => import('@/components/Heritage')
    },{
      path:'/person',
      name:'person',
      component:()=> import('@/components/Person')
    },{
      path:'/museum',
      name:'museum',
      component:()=> import('@/components/Museum')
    },{
      path:'/art',
      name:'art',
      component:()=>import('@/components/Art')
    },{
      path:'/crossover',
      name:'crossover',
      component: () => import('@/components/Crossover')
    },{
      path:'/cate',
      name:'cate',
      component:()=> import('@/components/Cate')
    }
  ]
})
