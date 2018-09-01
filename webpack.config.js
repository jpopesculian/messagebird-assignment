const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
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
}
