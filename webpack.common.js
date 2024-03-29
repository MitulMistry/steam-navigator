const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/load.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // Use Webpack 5 Asset Modules for images and fonts instead of file-loader.
      // Can't use [hash] instead of [name] for filename for background image in CSS file.
      {
        test: /\.(png|jp?g|gif|svg)$/i,
        include: [
          path.resolve(__dirname, 'assets/images')
        ],
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
      },      
      // For Font Awesome font files
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/i,
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.css$/i,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            url: false
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/views/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};