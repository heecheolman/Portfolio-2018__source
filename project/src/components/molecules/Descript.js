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
      text: '3레벨 대학생. 현재 웹을 주무기로 삼고있으며 학생신분인만큼 공부를 열심히 하는 척한다. 빨리 취업해서 자립을 하는것이 목표다. 배우는것은 재밌는것 같다. 하지만 배울 때 만큼은 뚝배기가 깨진다. 하.. 빨리 취업하고싶다.<br><br>웹을 본격적으로 시작한지 거진 3개월 지났는데 갈길이 멀다. 프론트엔드의 길은 멀고도 험하다. 인생은 선택의 연속이라고 했다. 나는 후회없는 선택을 했고 앞으로도 웹을 공부할것이다. 진지충 같아서 여기까지만 쓰고 요약하자면, 항상 배움을 멈추지않는 사람이 되야겠다.',
    });
    this.future = new P({
      style: 'descript descript--future',
      text: '프론트엔드로 꿈이 정해진 순간 열심히 달려왔다면 지금 웹 개발자를 하고있을 것이고, 풀스택 개발자가 되기까지 지금도 노력을 하고있을것이다.<br><br>취업을 해서 내집마련할 자금을 모으고있을것이며, 여전히 후드티를 좋아할것같다. 언제쯤 정장이 어울릴 날이올까? 차려입는것은 약간 내 스타일에 안맞는것같다. 그냥 나한테 잘 어울리는 스타일은 후드티로 남아있는듯하다.<br><br>차는 아마 없을것같다. 왜냐면 차는 집을 사고 살것이기때문이다. (못 사지 않을까?) 집을 사서 인테리어도 멋지게 해야겠다. 계속 배우는 사람이 되야겠다.',
    });
    this.store.option.basic = this.basic;
    this.store.option.present = this.present;
    this.store.option.future = this.future;
    
  }
  
  mount(event) {
  
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



