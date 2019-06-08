const path = require("path");

module.exports = {
    mode: "development",
    entry: "./static/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
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
