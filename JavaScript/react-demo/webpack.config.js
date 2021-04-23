const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            unused: true,
            drop_debugger: true,
            drop_console: true,
            dead_code: true
          }
        }
      })
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  entry: path.join(__dirname, "/src/index"),
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            presets: [
              require.resolve("@babel/preset-react"),
              [require.resolve("@babel/preset-env", { modules: false })]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      filename: "index.html"
    }),
    new BundleAnalyzer()
  ]
};
