const path = require('path')
const dev = process.env.NODE_ENV === 'development'
const withCSS = require('@zeit/next-css')
const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  ...withCSS({
    webpack (config, options) {
      if (dev) {
        config.module.rules.push({
          test: /\.ts$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            // eslint options (if necessary)
          }
        })
      }
      config.resolve.alias['@'] = path.join(__dirname, '')
      return config
    }
  })
})
