const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
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
};
