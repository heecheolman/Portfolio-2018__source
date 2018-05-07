// check-versions.js 를 실행함 --> 버젼체크가 성공하면 해당 js 실행
//                           -->         실패하면 process.exit(1); 종료
require('./check-versions.js')();


const webpack = require('webpack');
// isProduction 은 배포용인지 아닌지
const isProduction = process.env.NODE_ENV;

// error 핸들링.. 아직은 보류
// webpack build 실패 시에 err 가 떠야하는데 null 로 처리됨
// null 로 처리안되게 일부러 실패뜨게 해보기
const webpackErrorBinding = require('./error.js');

// webpackConfig 는 아직 무엇이 들어갈지 모름
let webpackConfig = null;

// process.NODE_ENV 가 production 이면 배포용 config 실행
if(isProduction === 'production') {
  webpackConfig = require('./webpack.prod.conf.js');
  webpack(webpackConfig, webpackErrorBinding);
}

