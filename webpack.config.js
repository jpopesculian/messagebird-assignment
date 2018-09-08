const webpack = require('webpack')
const path = require('path')
const _ = require('lodash')

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
                'babel-plugin-root-import',
                {
                  rootPathSuffix: 'client'
                }
              ],
              [
                'transform-imports',
                {
                  'react-icons': {
                    transform: importName =>
                      (_.includes(['Icon', 'witBaseIcon'], importName)
                        ? 'react-icons-kit'
                        : `react-icons-kit/feather/${importName}`),
                    preventFullImport: true,
                    skipDefaultConversion: true
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
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
        ]
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
