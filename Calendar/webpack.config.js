const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [{
    mode: 'development',
    target: "node",
    entry: {
        app: ["./app.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/calendar.back.js"
    },
    externals: [nodeExternals()],
},
    {
        mode: 'development',
        entry: './src/main.js',

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'js/calendar.js'
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        }
    }
];
