module.exports = {
    mode: "production",
    entry: "./static/js/main",
    output: {
        filename: "main.js",
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
