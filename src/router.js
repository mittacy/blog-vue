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
    },
    {
      path: '/admin/edit',
      name: 'adminEdit',
      component: () => import('@/views/Editadmin')
    },
    {
      path: '/categories/edit',
      name: 'cateEdit',
      component: () => import('@/views/Editcate')
    },
    {
      path: '/articles/edit',
      name: 'articleEdit',
      component: () => import('@/views/EditArticle')
    },
    {
      path: '/errlog',
      name: 'errlog',
      component: () => import('@/views/Errlog')
    },
  ]
})
