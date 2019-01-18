'use strict'

const path = require('path')
// const config = require('../config')
// const ExtractTextPlugins = require('extract-text-webpack-plugin')
// const packageConfig = require('../package.json')

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  },

  assetsPath: function (_path) {
    const assetsSubDirectory = 'src/assets'
    return path.posix.join(assetsSubDirectory, _path)
  }
}
