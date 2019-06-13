const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: ["url-loader"]
            }
        ]
    },

    devServer: {
        // The url part for webpack result
        publicPath: "/dist",
        // The root folder for static files
        contentBase: path.resolve(__dirname),
        // Live-reloading: true
        watchContentBase: true,
        compress: true,
        port: 5000
    }
};