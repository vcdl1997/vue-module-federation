/* eslint-disable no-undef */

// Definir o caminho público para o Webpack encontrar os arquivos remotos
__webpack_public_path__ = window.location.origin + '/';

(async () => {
  // Carrega os módulos remotos primeiro
  const sistemaA = await import('sistema_a/App');
  const sistemaB = await import('sistema_b/App');

  console.log('Módulo A:', sistemaA);
  console.log('Módulo B:', sistemaB);
  
  // Agora, carrega o Vue e a aplicação
  const { createApp } = await import('vue');
  const App = (await import('./App.vue')).default;
  const router = (await import('./router')).default;

  // Cria a aplicação Vue
  const app = createApp(App).use(router);

  // Pode ser útil adicionar o conteúdo remoto aos componentes do Orquestrador
  app.component('sistema-a', sistemaA);
  app.component('sistema-b', sistemaB);

  app.mount('#app');
})();
