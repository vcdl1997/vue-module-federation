const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  publicPath: 'http://localhost:8082/',

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'sistema_b',
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
      uniqueName: 'sistema_b',
    },
  },

  devServer: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
