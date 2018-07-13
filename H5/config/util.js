const path = require('path')
const glob = require('glob');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PAGE_PATH = path.resolve(__dirname, '../src/pages');
const merge = require('webpack-merge');


exports.entries = function () {
    let entryFiles = glob.sync(PAGE_PATH + '/*/*.js');
    let map = {}
    entryFiles.forEach((filePath) => {
      let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      map[filename] = filePath
    })
    return map
}

exports.htmlPlugin = function (name,centent) {
    let entryHtml = glob.sync(PAGE_PATH + '/*/*.html');
    let arr = [];
    entryHtml.forEach((filePath) => {
        const fileName = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'));
 
        let fileHtml = fs.readFileSync(filePath,'UTF-8');
        let conf = {
            template: centent,
            filename: `${name}/${fileName}`,
            chunks: [ fileName ],
            inject: true,
            title: 'test',
            files: {
                content: fileHtml,
            }
        };

        if (process.env.NODE_ENV === 'production') {
            conf = merge(conf, {
                minify: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true
                },
                chunksSortMode: 'dependency'
            })
        }
        arr.push(new HtmlWebpackPlugin(conf));
    });

    return arr
}