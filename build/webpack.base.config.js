const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.resolve(__dirname, '..');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: rootPath + 'dist'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }]
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"mock"'
            }
        }),
    ]
}