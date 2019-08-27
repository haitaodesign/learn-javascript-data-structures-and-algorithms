var path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const entryDir = path.join(__dirname, '/src')
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
    path: path.join(entryDir, '__build__'),
    filename: '[name].js',
    publicPath: '/__build__/'
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
    contentBase: path.join(__dirname, '__build__'),
    compress: true,
    port: 9000,
    open: true,
    openPage: '__build__/src/index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './src/index.html',
      template: './src/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './src/array/index.html',
      template: './src/array/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './src/base/index.html',
      template: './src/base/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './src/stack/index.html',
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