const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
    plugins: [
        new cleanWebpackPlugin()
    ]
})