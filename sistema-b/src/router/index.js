import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaB1View from '@/views/TelaB1View.vue'
import TelaB2View from '@/views/TelaB2View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tela-b1',
    name: 'Tela B1',
    component: TelaB1View
  },
  {
    path: '/tela-b2',
    name: 'Tela B2',
    component: TelaB2View
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
