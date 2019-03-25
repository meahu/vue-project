const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = path.resolve(__dirname, '..');

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
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',   
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}