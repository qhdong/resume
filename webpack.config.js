const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    'app': './app.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "app"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["latest"]
        },
      },
      {
        test: /\.(html|css|md)$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({minimize: true}),
    new webpack.optimize.UglifyJsPlugin({sourceMap: true})
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
  }
}
