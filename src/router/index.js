import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import TwoPage from '../views/TwoPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Family from '../views/family.vue'
import History from '../views/History.vue'

const routes = [
  {path: '/', component: Index},
  {path: '/twopage', component: TwoPage},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/family', component: Family},
  {path: '/history', component:History},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
