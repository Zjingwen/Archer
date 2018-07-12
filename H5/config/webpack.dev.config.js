const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 抽离 css

const util = require('./util');
const entryPaths = util.entries();
const Plugins = util.htmlPlugin('h5');

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
    }
  }
};
