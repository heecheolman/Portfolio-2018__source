import Component from './../../lib/Component';
import Store from './../../lib/Storage';
import P from './../atoms/P';

class Descript extends Component {
  constructor() {
    super();
    this.store = new Store();
    this.basic = new P({
      style: 'descript--basic',
      text: ' 😀 type over there ⌨️',
    });
    this.present = new P({
      style: 'descript descript--present',
      text: '현재 대학교 3학년이다. 웹 프론트엔드가 재미있어 계속 공부중이다. 배움에는 끝이없다고했다. 개발자의 꿈을 갖은 순간 계속 배우고싶고 지식을 쌓고 싶은 욕심이있다.<br><br>얼른 자립을 해서 내 주변사람들을 내 힘으로 챙겨주고싶다. 인생은 선택의 연속이다. 내 선택에 대해 한번도 후회한적이없고 설령 잘못됐더라도 바로잡을 나의 신념이있다.<br><br><br>에러는 빌드의 어머니다.',
    });
    this.future = new P({
      style: 'descript descript--future',
      text: '미래의 나는 아무도 모른다. 하지만 현재에 집중한다면 미래는 확실히 보일것이다.<br><br>행복의 기준은 사람마다 다르기 마련이다. 나의 행복의 기준은 내가 주변사람들을 챙길 수 있을 만큼 자립하는 것이고 좋아하는 음악을 들으며 (빈지노) 삶을 즐기고싶다. 그리고 옷장엔 후드가 가득할것이다. 격식있는 양복보단 자유롭게 생각할 수 있는 후드가 더 편하다.<br><br><br>꿈에대한 과거의 나의 선택은 옳았다',
    });
    this.store.option.basic = this.basic;
    this.store.option.present = this.present;
    this.store.option.future = this.future;
    
  }

  render() {
    return `
      <div class="flex-container flex-center-sort base">
        ${this.basic.render()}
      </div>
    `;
  }
}

export default Descript;



