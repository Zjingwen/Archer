/**
 * 开发环境域名切换 
 */
const CONF = {
  development: {
    "url": "",// 测试域名
    "mock": "http://localhost:8001/",// 本地mock域名
    "diy": "",// 特殊情况下使用
  },
};

module.exports = {
  development: CONF.development['mock'],// 需要切换可直接修改，mock或者url
};