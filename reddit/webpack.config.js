const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");

module.exports = {
    entry: {
        'bundle.js': [
            path.resolve(__dirname, 'src/main.js')
        ]
/*
        'bundle.css': [
            path.resolve(__dirname, './styles/initial.css'),
            path.resolve(__dirname, './styles/common.css'),
            path.resolve(__dirname, './styles/Layout.css'),
            path.resolve(__dirname, './styles/Section-View.css'),
            path.resolve(__dirname, './styles/Footer.css'),

            path.resolve(__dirname, './styles/Header/Header.css'),
            path.resolve(__dirname, './styles/Header/Header__logo.css'),
            path.resolve(__dirname, './styles/Header/Header__menu.css'),
            path.resolve(__dirname, './styles/Header/Header__navigation.css'),
            path.resolve(__dirname, './styles/Header/Header__search.css'),

            path.resolve(__dirname, 'styles/layouts/flex-layout.css'),

            path.resolve(__dirname, 'styles/Posts/Posts.css'),
            path.resolve(__dirname, 'styles/Posts/Posts__post_actions.css'),
            path.resolve(__dirname, 'styles/Posts/Posts__post_headers.css'),
            path.resolve(__dirname, 'styles/Posts/Posts__post_votes.css'),

            path.resolve(__dirname, 'styles/Sidebar/Sidebar.css'),
            path.resolve(__dirname, 'styles/Sidebar/Sidebar__channels.css'),
            path.resolve(__dirname, 'styles/Sidebar/Sidebar__home.css'),
            path.resolve(__dirname, 'styles/Sidebar/Sidebar__premium.css')
        ]
*/
    },
    mode: 'development',
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                include: [
                    path.resolve(__dirname, "images/"),
                ],

                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            {
                test: /\.js/,
                use: ['babel-loader'],
                exclude: /(node_modules|bower_components)/
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.js'),
    ]
};
