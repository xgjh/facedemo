
const webpack = require('webpack');
module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                // target: 'http://180.76.172.91:8008/',
                target: 'http://192.168.170.68:9000/', 
                // target host
                ws: true,
                disableHostCheck: true,
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': ''    //代理的路径11
                }
            }
        }
    },
    publicPath: './',
    outputDir: 'docs'
}
