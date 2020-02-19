// vue.config.js
const path = require('path')

module.exports = {
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === "production") {
    //         // mutate config for production...
    //     } else {
    //         // mutate for development...
    //     }
    // },
    devServer: {
        proxy: {
            // proxyTable 설정
            "/api": {
                target: "http://localhost:3001/",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                  }
            }
        }
    },
    outputDir : path.resolve(__dirname, '../backend/public')
};
