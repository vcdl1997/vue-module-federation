const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  publicPath: 'http://localhost:8081/',

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'sistema_a',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/bootstrap.js', 
        },
        shared: {
          vue: { singleton: true, requiredVersion: '^3.0.0' },
          'vue-router': { singleton: true, requiredVersion: '^4.0.0' },
        },
      }),
    ],
    output: {
      uniqueName: 'sistema_a',
    },
  },

  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
