import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home')
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('@/views/Articles')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/Categories')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('@/views/Category')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('@/views/Article')
    }
  ]
})
