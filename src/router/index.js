import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Member from '../views/Member.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/member-area',
    name: 'Member',
    component: Member,
    meta : {
      requiresAuth : true
    }
  },
  {
    path: '/progress',
    name: 'Progress',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from ,next) =>{
  const authenticatedUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if ( requiresAuth && !authenticatedUser) next('login')
  else next()
})

export default router
