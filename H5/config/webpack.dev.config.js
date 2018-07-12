const path = require('path');
const index = path.resolve(__dirname,'../src/pages/index/index.js');
const item = path.resolve(__dirname,'../src/pages/item/item.js');
const outPath = path.resolve(__dirname,'../dist/');

const HtmlWebpackPlugin = require('html-webpack-plugin');// 生成html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 抽离 css

// const util = require('./util');
// const entryPaths = util.entries();
// const htmlPlugin = util.htmlPlugin();

module.exports = {
  mode: 'development',
  entry: {
    index: index,
    item: item,
  },
  output:{
    path: outPath,
    filename: '[name].js',
  },
  module:{
    rules:[
      {
        test: /\.css$/, 
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ]
  },
  devServer: {
    compress: true,
    inline: true,
    open: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../src/pages/index/index.html'),
      filename: 'h5/index',
      chunks: [ 'index' ],
      inject: true
    }),
    // new MiniCssExtractPlugin({
    //   filename: path.resolve(__dirname,'../src/pages/*/**.css'),
    //   chunkFilename: '[name].css',
    // }),
    // new MiniCssExtractPlugin({
    //   filename: path.resolve(__dirname,'../pages/item/item.css'),
    //   chunkFilename: "item.css"
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../src/pages/item/item.html'),
      filename: 'h5/item',
      chunks: [ 'item' ],
      inject: true
    }),
  ],
  resolve:{
    extensions: ['*', '.js', '.css'],
    alias:{
      'vue': path.resolve(__dirname,'../node_modules/vue/dist/vue'),// @TODO jingwen 提取公共
    }
  }
};
