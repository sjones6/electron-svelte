const { resolve } = require('path')
const conf = require('./webpack.config.js')

conf.resolve.alias.mount = resolve(__dirname, "test", "unit", "renderer", ".utils", "mount")

module.exports = conf