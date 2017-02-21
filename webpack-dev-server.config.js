const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    "./app.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    sourceMapFilename: "[file].map"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["stage-1"]
        },
      },
      {
        test: /\.(html|css|md)$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true})
  ],
  devtool: 'eval',
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  }
};
