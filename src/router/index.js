import Vue from 'vue'
import Router from 'vue-router'
const Input = () => import('@/components/Input.vue')
const Home = () => import('@/components/Home.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'input',
      component: Input
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
