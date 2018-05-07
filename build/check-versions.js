// const semver = require('semver');
// const chalk = require('chalk');
// const packageConfig = require('./../package.json');
//
//
// // 버젼의 요구사항들
// const versionRequirements = [
//   {
//     name: 'node',
//     // semver.clean()함수는 버젼정보만 추출함, 공백도 제거
//     // process.version 은 현재 node의 버젼을 불러옴
//     currentVersion: semver.clean(process.version),
//     //package.json 파일의 engines.node 키의 값을 가져옴.
//     versionRequirement: packageConfig.engines.node,
//   }
// ];
//
// // () => {} 함수로 기술한 이유는 check-version모듈을 require 한 후 바로 실행하려고
// module.exports = () => {
//   // warning 을 담는 배열
//   const warnings = [];
//
//   // versionRequirements 배열을 forEach 로 순회
//   // semver.satisfies(a, b) b의 인자에 a의 조건이 맞으면 true 반환
//   // 다시말하면 요구에 맞지않는다면 warnings 배열에 push 해줌
//   versionRequirements.forEach((mod) => {
//     if(!semver.satisfies(mod.currentVersion, mod.versionRequirement)){
//       warnings.push(`${mod.name} :
//       ${chalk.red(mod.currentVersion)} should be
//       ${chalk.green(mod.versionRequirement)}`);
//     }
//   });
//
//   // warnings.length 가 한개라도 존재하면 실행
//   if(warnings.length){
//     console.log('');
//     // warnings.length 가 1이면 모듈을업데이트
//     // warnings.length 가 2이상이면 모듈들을 업데이트
//     // 제대로좀 읽자 ;
//     console.log(warnings.length === 1 ? chalk.yellow('이 모듈을 업데이트 해주세요.') : chalk.yellow('이 모듈들을 업데이트 해주세요.'));
//     console.log('');
//
//
//     // warnings 에 해당하는 요소들을 출력
//     for(let i = 0; i < warnings.length; i++) {
//       const warning = warnings[i];
//       console.log(' ' + warning);
//     }
//
//     console.log('');
//     // process.exit(0) 은 프로세스가 정상종료됨을 알림 default 0
//     // process.exit(1) 은 프로스세가 비정상종료. 여기서 warning 이 있으므로 비정상 종료
//     process.exit(1);
//   }
// };

const semver = require('semver');
const chalk = require('chalk');
const packageConfig = require('./../package.json');

const versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node,
  },
];

module.exports = () => {
  // 에러처리배열
  const warnings = [];
  
  versionRequirements.forEach((mod) => {
    if(!semver.satisfies(mod.currentVersion, mod.versionRequirement)){
      warnings.push(`${mod.name} :
      ${chalk.red(mod.currentVersion)} should be
      ${chalk.green(mod.versionRequirement)}`);
    }
  });
  
  if(warnings.length) {
    console.log('');
    console.log(warnings.length === 1 ? chalk.yellow('이 모듈을 업데이트해주세요') : chalk.yellow('이 모듈들을 업데이트해주세요'));
    console.log('');
    
    for(let i = 0 ; i < warnings.length; i++) {
      const warning = warnings[i];
      console.log(`  ${warning}`);
    }
    
    console.log('');
    process.exit(1);
  }
};
