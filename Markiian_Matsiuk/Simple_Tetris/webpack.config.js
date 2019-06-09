const path = require('path');


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve("", 'dist'),
        filename: "bundle.js"
    },
    module: {
    }
};
