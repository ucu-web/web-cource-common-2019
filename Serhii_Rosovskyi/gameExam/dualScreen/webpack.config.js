const path = require('path');


module.exports = {
    mode: "development",
    entry: "./scripts/canvas.js",
    output: {
        path: path.resolve("", 'dist'),
        filename: "bundle.js",
    }
    ,
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            }
        ]
    }

};