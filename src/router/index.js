import Vue from 'vue'
import Router from 'vue-router'
import AboutInner from '@/components/about/AboutInner'
import AboutHot from '@/components/about/AboutHot'
import AboutBook from '@/components/about/AboutBook'
import Login from '@/components/Login'
const Text = () => import('@/components/Text')
const Home = () => import('@/components/Home')
const About = () => import('@/components/About')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'text',
      component: Text
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        login: true
      },
      children: [
        {
          path: 'inner',
          name: 'inner',
          component: AboutInner,
          meta: {
            login: true,
            inner: 1
          }
        },
        {
          path: 'hot',
          name: 'hot',
          component: AboutHot,
          meta: {
            login: true,
            hot: 1
          }
        },
        {
          path: 'book/:id',
          name: 'book',
          component: AboutBook,
          meta: {
            login: true,
            book: 1
          }
        }
      ]
    }
  ]
})
