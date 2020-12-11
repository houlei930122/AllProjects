'use strict'
const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry:{
    // 需要提前打包的第三方库
    vendor:['vue/dist/vue.esm.js','vue-router','axios']
  },
  output:{
    path:path.join(__dirname,"../static/js"),   // 打包后文件输出的位置
    filename:'[name].dll.js',     // vendor.dll.js中暴露出的全局变量名
    library:'[name]_library'   
    // 主要是给DllPlugin中的name使用，故这里需要和webpack.DllPlugin中的`name:'[name]_library'`,保持一致
  },
  plugins:[
    new webpack.DllPlugin({
      path: path.join(__dirname,'../static',  '[name]-manifest.json'),
      name:'[name]_library',
      context:__dirname
    }),
    // 压缩文件
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings:false
      }
    })

  ]

}