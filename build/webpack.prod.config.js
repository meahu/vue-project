const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin({filename: "css/[name].[hash].css"}),
        new CopyWebpackPlugin([
          {
            from: resolve('static'),
            to: 'static',
            ignore: ['.*']
          }
        ])
    ]
})