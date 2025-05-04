import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RemoteSistemaA from '@/views/RemoteSistemaA.vue'
import RemoteSistemaB from '@/views/RemoteSistemaB.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sistema-a/:catchAll(.*)*',
    name: 'SistemaA',
    component: RemoteSistemaA
  },
  {
    path: '/sistema-b/:catchAll(.*)*',
    name: 'SistemaB',
    component: RemoteSistemaB
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
