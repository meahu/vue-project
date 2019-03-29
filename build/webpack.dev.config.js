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
        }
    }
});