const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryDir = path.join(__dirname, '/')
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/app.js',
    array: './src/array/app.js',
    base: './src/base/app.js',
    stack: './src/stack/app.js'
  },
  output: {
    clean: true,
    path: path.join(entryDir, '__build__'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '__build__')
    },
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: './array/index.html',
      template: './src/array/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './base/index.html',
      template: './src/base/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './stack/index.html',
      template: './src/stack/index.html',
      inject: false
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      include: ['app.js'],
      exclude: ['vendor.js'],
      columns: false
    })
  ]
}
