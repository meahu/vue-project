const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const pluginss = require('speed-measure-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.(jpe?g|png)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: "[name]-[hash:5].min.[ext]",
                        limit: 20000, // size <= 20KB
                        publicPath: "images",
                        outputPath: "images"
                    }
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
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            logLevel: 'info'
        })
    ],
    optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            libs: {
              name: 'chunk-libs',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial' // 只打包初始时依赖的第三方
            },
            elementUI: {
              name: 'chunk-elementUI', // 单独将 elementUI 拆包
              priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
              test: /[\\/]node_modules[\\/]element-ui[\\/]/
            },
            commons: {
              name: 'chunk-comomns',
              test: resolve('src/components'), // 可自定义拓展你的规则
              minChunks: 3, // 最小公用次数
              priority: 5,
              reuseExistingChunk: true
            }
          }
        },
        runtimeChunk: 'single',
        // minimizer: [
        //   new UglifyJsPlugin({
        //     uglifyOptions: {
        //       mangle: {
        //         safari10: true
        //       }
        //     },
        //     sourceMap: config.build.productionSourceMap,
        //     cache: true,
        //     parallel: true
        //   }),
        //   // Compress extracted CSS. We are using this plugin so that possible
        //   // duplicated CSS from different components can be deduped.
        //   new OptimizeCSSAssetsPlugin()
        // ]
      }
}