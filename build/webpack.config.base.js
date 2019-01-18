'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {
  VueLoaderPlugin
} = require('vue-loader')

const utils = require('./utils')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      'pages': utils.resolve('src/pages'),
      'router': utils.resolve('src/router'),
      'utils': utils.resolve('src/utils'),
      'style': utils.resolve('src/assets/style'),
      'img': utils.resolve('src/assets/images'),
      'components': utils.resolve('src/components')
    }
  },

  module: {
    rules: [{
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
        // }, {
        //   test: /\.ts$/,
        //   exclude: /node_modules/,
        //   enforce: 'pre',
        //   loader: 'tslint-loader'
        // },
        // {
        //   test: /\.ts$/,
        //   exclude: /node_modules/,
        //   loader: 'awesome-typescript-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: utils.resolve('src/assets'),
      to: utils.resolve('dist/static'),
      toType: 'dir'
    }])
  ]
}
