const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const util = require('./util');
const outPath = path.resolve(__dirname,'../dist/h5');
const cleanPath = path.resolve(__dirname,'../');
const content = path.resolve(__dirname, '../src/index.html'); // 模版文件
const entryPaths = util.entries(); //遍历js文件
const Plugins = util.htmlPlugin(content); //遍历生成HtmlWebpackPlugin对象

Plugins.push(
  new MiniCssExtractPlugin({
    filename: "[name]/[name].css",
  }),
  new CleanWebpackPlugin(['dist'], {
    root: cleanPath,
    verbose: true,
    dry: false,
  }),
);

module.exports = {
  mode: 'production',
  entry: entryPaths,
  output:{
    filename: '[name]/[name].js',
    path: outPath
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
    ],
  },
  plugins: Plugins,
  resolve:{
    extensions: ['*', '.js', '.css'],
    alias:{
      'vue': path.resolve(__dirname,'../node_modules/vue/dist/vue'),// @TODO jingwen 提取公共
    },
  },
};
