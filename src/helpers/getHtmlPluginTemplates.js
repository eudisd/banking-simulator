var HtmlWebpackPlugin = require('html-webpack-plugin');
var fs = require('fs');

module.exports = function getHtmlPluginTemplates() {
  var files = fs.readdirSync(process.cwd() + '/src/templates'),
      templates = [];

  files.forEach(function(file) {
    if (file.slice(-3) === 'ejs') {
      templates.push(
        new HtmlWebpackPlugin({
          template: process.cwd() + '/src/templates/' + file,
          filename: process.cwd() + '/dest/' + file.slice(0, -4) + '.html',
          inject: true
        })
      );
    } else {
      templates.push(
        new HtmlWebpackPlugin({
          template: process.cwd() + '/src/templates/' + file,
          filename: process.cwd() + '/dest/' + file,
          inject: false
        })
      );
    }
  });

  return templates;
};
