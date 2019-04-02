module.exports = {
  "define":{
    "process.env.NODE_ENV": "production"
  },
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
  "html": {
    "filename": "index.html",
    "template": "./public/index.ejs",
    "inject": false,
    "hash": false,
    "xhtml": true,
    "files": {
      "main": [
        "/Admin/dist/index.js",
        "/Admin/dist/index.css"
      ]
    }
  }
}