const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 基本路径
    publicPath: './',

    // 输出文件目录
    outputDir: 'dist',

    configureWebpack: {
        externals: { //忽略不需要打包的库,在index.html中使用cdn引入
            // 'AMap': 'AMap',
            // 'AMapUI': 'AMapUI'
        }
    },

    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: (config) => {
        config.resolve.alias
            .set('assets', resolve('src/assets'))
    },

    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: process.env.NODE_ENV==='development'?true:false,

    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: {
        //     '/api': {
        //         // 目标 API 地址
        //         target: 'http://127.0.0.1:3000',
        //     },
        // }, // 设置代理
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }

}