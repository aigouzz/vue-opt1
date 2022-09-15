import Vue from 'vue'
import Router from 'vue-router'
import Text from '@/components/Text'
const AboutInner = () => import(
  /* webpackChunkName: 'about' */
  '@/components/about/AboutInner')
const AboutHot = () => import(
  /* webpackChunkName: 'about' */
  '@/components/about/AboutHot')
const AboutBook = () => import(
  /* webpackChunkName: 'about' */
  '@/components/about/AboutBook')
const Login = () => import(
  /* webpackChunkName: 'login' */
  '@/components/Login')
const Home = () => import(
  /* webpackChunkName: 'home' */
  '@/components/Home')
const About = () => import(
  /* webpackChunkName: 'about' */
  '@/components/About')

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
