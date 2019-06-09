module.exports = {
    mode: "development",
    entry: "./static/js/build",
    output: {
        filename: "build.js",
        library: "app"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
};
