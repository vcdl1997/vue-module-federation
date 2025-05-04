import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TelaA1View from '@/views/TelaA1View.vue'
import TelaA2View from '@/views/TelaA2View.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tela-a1',
    name: 'Tela A1',
    component: TelaA1View
  },
  {
    path: '/tela-a2',
    name: 'Tela A2',
    component: TelaA2View
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
