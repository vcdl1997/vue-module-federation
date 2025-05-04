const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = defineConfig({
  configureWebpack: {
    output: {
      filename: '[name].[hash].js', // Para evitar o cache do arquivo
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'orquestrador',
        remotes: {
          sistema_a: 'sistema_a@http://localhost:8081/remoteEntry.js',
          sistema_b: 'sistema_b@http://localhost:8082/remoteEntry.js',
        },
        shared: {
          vue: { singleton: true, requiredVersion: '^3.0.0' },
          'vue-router': { singleton: true, requiredVersion: '^4.0.0' },
        },
      }),
    ],
  },
  devServer: {
    port: 8080,
    hot: false, // Desabilita o HMR
    headers: {
      'Access-Control-Allow-Origin': '*', // Permite CORS para todos
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    },
  },
})