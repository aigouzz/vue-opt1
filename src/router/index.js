import Vue from 'vue'
import Router from 'vue-router'
const Text = () => import('@/components/Text.vue')
const Home = () => import('@/components/Home.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'text',
      component: Text
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
