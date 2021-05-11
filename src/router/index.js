import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login.vue'
import Main from '@/pages/Main.vue'
import Projects from '@/pages/Projects.vue'
import InfoProject from '@/pages/InfoProject.vue'
import notFoundPage from '@/pages/404.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/login', name: 'login', component: Login },
  {
    path: '/',
    name: 'main',
    component: Main
  },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/projects/:id', name: 'infoProject', component: InfoProject },
  { path: '*', name: '404', component: notFoundPage }
]
const router = new VueRouter({
  mode: 'hash',
  routes
})
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('token') && to.name !== 'login') {
    next({ path: '/login' })
  } else {
    next()
  }
})
export default router
