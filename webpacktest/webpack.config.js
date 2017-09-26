var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry:{
       ab:'./component/ab.js',
       cd:'./component/cd.js'
    },
    output:{
        filename:'[name]-[hash].js',
        path:path.resolve(__dirname,'dist'),
    },
     plugins:[
      new HtmlWebpackPlugin({
        template:'./component/index.html'
      }),
      new CopyWebpackPlugin([{
          from: './component/index.css',
          to: '../dist/',
          flatten:true
      }]),
    ]
}