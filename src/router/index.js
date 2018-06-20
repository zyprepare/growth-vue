import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  hashbang: false,
  history: true,
  linkActiveClass: 'active',
  routes
})

export default router
