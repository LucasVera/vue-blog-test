import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogDetail from './views/BlogDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog-list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/BlogList.vue')
    },
    {
      path: '/blog/:id',
      name: 'blog-detail',
      component: BlogDetail
    }
  ]
})
