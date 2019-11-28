import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/home/index.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/',component: Main,
      children:[
        {path: '/',name: 'home',component: () => import('./views/home/index.vue')},
        {path: '/sort',name: 'sort',component: () => import('./views/Sort.vue')},
        {path: '/my',name: 'my',component: () => import('./views/My.vue')},
        {path: '/cart',name: 'cart',component: () => import('./views/Cart.vue')},
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Detail.vue'),
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/sort',
    //   name: 'sort',
    //   component: () => import('./views/Sort.vue'),
    // },
    // {
    //   path: '/my',
    //   name: 'my',
    //   component: () => import('./views/My.vue')
    // },
  ]
})
