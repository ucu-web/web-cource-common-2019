const path = require('path');


module.exports = {
    mode: "development",
    entry: "./static/index.js",
    output: {
        path: path.resolve("", 'dist'),
        filename: "bundle.js"
    }

    ,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    }
};