import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from './services/auth'

import Home from './components/Home'
import Profile from './components/Profile'
import ProfileEdit from './components/ProfileEdit'
import User from './components/User'
import Signin from './components/Signin'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile, meta: { requiresAuth: true } },
    { path: '/profile/edit', component: ProfileEdit, meta: { requiresAuth: true } },
    { path: '/user/:id', component: User },
    { path: '/signin', component: Signin }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((x) => x.meta.requiresAuth)) {
    Auth.requiresUser()
      .then(() => {
        next()
      }, () => {
        next({ path: '/signin', query: { redirect: to.fullPath } })
      })
    return
  }
  next()
})

export default router
