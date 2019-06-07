const path = require("path");

module.exports = {
  mode: "development",
  entry: "./static/index.js",
  output: {
    path: path.resolve("", "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
