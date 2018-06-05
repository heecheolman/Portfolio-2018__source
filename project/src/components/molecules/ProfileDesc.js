import Component from '../../lib/Component';
import P from './../atoms/P';

class ProfileDesc extends Component {
  constructor() {
    super();
    this.p = new P({
      text: '자유로운것을 좋아하는 학생<br>호기심이많은 학생<br>끊임없이 배우고싶은 학생<br>편한옷을 좋아하는 학생<br>맥북 15인치가 갖고싶은 학생<br>음악감상을 좋아하는 사람<br>소고기보다 삼겹살 좋아하는 사람<br>빈지노를 좋아하는 사람<br>노력형 개발자<br>웹 개발자가 꿈<br>',
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