/**
 * 公共引入配置
 * @utils 公共方法
 * @pages 页面
 * @components 公共组建
 * @models redux数据流
 * @hoc 高阶组件
 */
let path = require('path');

module.exports = {
  '@utils': path.resolve('src/utils'),
  '@pages': path.resolve('src/pages'),
  '@components': path.resolve('src/components'),
  // '@models': path.resolve('src/models'),
  // '@hoc':path.resolve('src/hoc'),
};;