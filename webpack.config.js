const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const $ = require('jquery');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {app: './src/index.js'},
  output: {
    path: path.resolve(__dirname, './static'),
    publicPath: '/static/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:  'file-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
           {
             loader: 'css-loader',
             options: {
               modules: true,
               localIdentName: '[hash:base64:5]',
               importLoaders: 1
             }
           }
          //  {
          //    loader:'postcss-loader',
          //    options: {
          //      config: {
          //        path: path.resolve(process.cwd(), 'postcss.config.js')
          //      },
          //      sourceMap: 'inline'
          //    }
          //  }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['static']),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
     'vue$': 'vue/dist/vue.esm.js',
     '@': resolve('src')
    }
  }
};
