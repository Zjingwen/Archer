const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const util = require('./util');

const content = path.resolve(__dirname, '../src/index.html'); // 模版文件
const entryPaths = util.entries(); //遍历js文件
const Plugins = util.htmlPlugin('h5',content); //遍历生成HtmlWebpackPlugin对象

Plugins.push(
  new MiniCssExtractPlugin({
    filename: "[name].css",
  }),
);

module.exports = {
  mode: 'development',
  entry: entryPaths,
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
    port: 9000,
  },
  plugins: Plugins,
  resolve:{
    extensions: ['*', '.js', '.css'],
    alias:{
      'vue': path.resolve(__dirname,'../node_modules/vue/dist/vue'),// @TODO jingwen 提取公共
    },
  },
};
