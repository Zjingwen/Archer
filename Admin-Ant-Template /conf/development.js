module.exports = {
  "publicPath":"/",
  "extraBabelPlugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
    ]
  ],
  "define":{
    "process.env.NODE_ENV": "development"
  },
  "html": {
    "filename": "index.html",
    "template": "./public/temp.ejs",
    "hash": true,
    "xhtml": true
  },
  "proxy":{
    "/api":{
      "target": "http://127.0.0.1:7001"
    }
  }
}