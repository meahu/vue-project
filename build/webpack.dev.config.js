const baseConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.(vue|js|jsx)$/,
                // loader: 'eslint-loader',
                exclude: /node_modules/,
                enforce: 'pre'
              }
        ]
    },
    devServer: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://api.github.com',
                pathRewrite: {'^/api' : '/api'},
                changeOrigin: true
            }
        },
        overlay: true
    }
});