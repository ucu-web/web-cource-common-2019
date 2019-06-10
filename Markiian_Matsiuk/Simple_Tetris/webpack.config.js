const path = require('path');


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve("", 'dist'),
        filename: "bundle.js"
    },
    module: {
    },
    devServer: {
        index:"./index.html",
        compress: true,
        port: 9000
    }
};
