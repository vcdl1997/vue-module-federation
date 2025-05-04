import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Só monta se estiver rodando localmente (sem estar federado)
if (!window.__POWERED_BY_MODULE_FEDERATION__) {
  createApp(App).use(router).mount('#app')
}

// Exporta os componentes para consumo remoto
export default {
  app: App,
  router,
}