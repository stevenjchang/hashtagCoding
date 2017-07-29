const path = require('path');
const RewriteImportPlugin = require("less-plugin-rewrite-import");

module.exports = {
  entry: './client/src/index',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  watch: true,
  node: {
    __dirname: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.less/,
        loader: 'style!css!less',
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
        loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack',
      },
    ],
  },
  // target: "node"
};  
