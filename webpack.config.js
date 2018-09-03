const webpack = require('webpack')
const path = require('path')

module.exports = (env, argv) => ({
  entry: () =>
    (argv.mode === 'development'
      ? ['@babel/polyfill', './client/lib/devTools', './client/index.js']
      : ['@babel/polyfill', './client/index.js']),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              [
                'transform-imports',
                {
                  // TODO remove
                  'react-material-icon-svg': {
                    transform: 'react-material-icon-svg/dist/${member}',
                    preventFullImport: true
                  },
                  lodash: {
                    transform: 'lodash/fp/${member}',
                    preventFullImport: true
                  }
                }
              ]
            ],
            presets: [
              ['@babel/preset-env', { targets: 'last 1 version' }],
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    port: 9000,
    proxy: {
      '**': {
        target: 'http://localhost:3000'
      }
    }
  }
})
