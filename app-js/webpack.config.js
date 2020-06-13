const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
// const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  mode: 'development',
  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
  },
  entry: './src/index.js',
  output: {
    // path: // by default dist
    // publicPath: '/Scripts/portalProveedor/',
    // filename: '[name].[hash].js',
    // chunkFilename: '[id].[chunkhash].js',
    filename: '[name].js',
    chunkFilename: '[id].js',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: '../../../Views/Organizacion/Personal.cshtml', // output
      template: './src/index.html', // input
    }),
    new WebpackPwaManifestPlugin({
      name: 'PTimmer',
      shortname: 'PTimmer',
      description: 'Timmer Platform',
      background_color: '#fff',
      theme_color: '#F7C807',
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      /* icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ] */
    }),
    /* new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://res.cloudinary.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-cloudinary'
          }
        },
        {
          urlPattern: new RegExp('https://images.unsplash.com'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images-unsplash'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-api.midudev.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    }) */
    // new LiveReloadPlugin(),
  ],
  module: {
    rules: [
      /* {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      }, */
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}