const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/load.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jp?g|gif|svg)$/,
        include: [
          path.resolve(__dirname, 'assets/img')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'              
            }
          }
        ]
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/, //For Font Awesome font files
        include: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'              
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?url=false'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
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