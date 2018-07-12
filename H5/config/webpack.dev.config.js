const path = require('path');
const pages = path.resolve(__dirname,'../src/pages/index/index.js');
const outPath = path.resolve(__dirname,'../dist/');

const HtmlWebpackPlugin = require('html-webpack-plugin');// 生成html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 抽离 css

module.exports = {
  mode: 'development',
  entry: {
    index: pages,
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
  plugins:[
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../src/pages/index/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'pages/index/[name].css',
      chunkFilename: "[id].css"
    }),
  ],
  resolve:{
    extensions: ['*', '.js', '.css'],
    alias:{
      'vue': path.resolve(__dirname,'../node_modules/vue/dist/vue'),// @TODO jingwen 提取公共
    }
  }
};
