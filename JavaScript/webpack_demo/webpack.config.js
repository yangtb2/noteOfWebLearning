const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    liveReload: true,
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [new UglifyJSPlugin()]
};
