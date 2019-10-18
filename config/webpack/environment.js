const {environment} = require('@rails/webpacker')
const WebpackAssetsManifest = require('webpack-assets-manifest')
environment.config.merge({
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
})
environment.plugins.insert(
  'Manifest',
  new WebpackAssetsManifest({
    entrypoints: true,
    writeToDisk: true,
    publicPath: true
  })
)
environment.loaders.prepend(
  'jsx',
  {
    test: /\.(jsx|js)x?$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  }
)
module.exports = environment