// webpack-merge 모듈은 config 파일들을 합쳐주는 모듈
const webpackMerge = require('webpack-merge');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.conf.js');

const webpackMergedDev = webpackMerge(webpackBaseConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
  }
});

module.exports = webpackMergedDev;