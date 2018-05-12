import Component from '../../lib/Component';
import P from './../atoms/P';

class ProfileDesc extends Component {
  constructor() {
    super();
    this.p = new P({
      text: '자유로운것을 좋아하는 학생.<br>호기심이많은 학생.<br>도시와 시골생활을 둘 다 접해본 시골쥐, 서울쥐.<br>편한옷을 좋아하는 학생.<br>맥북 15인치가 갖고싶은 학생.<br>네이버 입사하고싶은 학생.<br>소고기보다 삼겹살 좋아하는 학생.<br>빈지노를 좋아하는 학생.<br>아직 학생이지만 직장인이 될 예정.<br>웹 풀스택 개발자가 꿈 (멀고도 험하다)<br>',
      style: 'main-content-p zero',
    });
  }
  
  render() {
    return `
      <div class="main-content-p-wrapper flex-container flex-center-sort">
        ${this.p.render()}
      </div>
    `;
  }
}

export default ProfileDesc;