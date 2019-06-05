const path = require('path');

module.exports = {
    mode: "development",
    entry: "./static/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
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
    }
};