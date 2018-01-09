const { resolve } = require('path')

module.exports = {
  devtool: "source-map",
  entry: {
    main: './src/renderer/index.js'
  },
  output: {
    path: resolve(__dirname, 'src', 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      }
    ]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src", "renderer"),
      "~": resolve(__dirname)
    }
  }
}