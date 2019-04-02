const URL = require('./url');
let alias = require('./alias');

module.exports = {
  "entry": "src/index.js",
  "publicPath":"/",
  "define":{
    "process.env.NODE_ENV": "development"
  },
  "extraBabelPlugins": [
    "dva-hmr",
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
    ]
  ],
  "html": {
    "filename": "index.html",
    "template": "./index.ejs",
    "hash": true,
    "xhtml": true
  },
  "proxy":{
    "/api":{
      "target": URL,
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""},
    },
    "alias": alias,
  },
};