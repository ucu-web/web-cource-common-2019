const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/the_tank.js'
    },
    devServer: {
        contentBase:  path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }

};