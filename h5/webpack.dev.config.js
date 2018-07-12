const path = require('path');
const pages = path.resolve(__dirname,'./src/pages/index/index.js');
const outPath = path.resolve(__dirname,'dist/');

const HtmlWebpackPlugin = require('html-webpack-plugin');// 生成html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 抽离 css

module.exports = {
  mode: 'development',
  entry: {
    index: pages,
  },
  output: {
    path: outPath,
    filename: 'pages/index/[name].js'
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
    contentBase: [path.join(__dirname, "dist/pages")],
    compress: true,
    inline: true,
    open: true,
    port: 9000
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/pages/index/index.html',
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
    extensions: ['*', '.js', '.css', '.vue', '.less'],
    alias:{
      'vue': path.resolve(__dirname,'node_modules/vue/dist/vue'),
    }
  }
};
