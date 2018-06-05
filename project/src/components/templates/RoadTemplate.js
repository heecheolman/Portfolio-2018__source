import Component from './../../lib/Component';
import TitleBox from './../organisms/TitleBox';
import RightArrowBox from './../organisms/RightArrowBox';
import LeftArrowBox from './../organisms/LeftArrowBox';
import DownArrowBox from './../organisms/DownArrowBox';
import PopBox from './../organisms/PopBox';

class RoadTemplate extends Component {
  constructor() {
    super();
    this.titleBox = new TitleBox({
      title: '🌊',
      style: 'title',
    });
    this.rightArrowBox = new RightArrowBox({
      selector: '.arrow-right',
      template: '.template-road',
      pageName: 'FuturePage',
    });
    this.leftArrowBox = new LeftArrowBox({
      selector: '.arrow-left',
      template: '.template-road',
      pageName: 'MainPage',
    });
    this.downArrowBox = new DownArrowBox();
    this.popBox1 = new PopBox({
      title: '출생',
      year: '1995.09.18',
      aos: 'road-pop-box__aos--1',
      bar: 'road-pop-box__bar--1',
      text: '1995년 가을을 맞이하는 날 즈음 김희철탄생. 서울에서 활발하게 도심생활을 즐긴 초딩 김희철은 12살에 전북 고창으로 이사를 간다. 새로운 환경이어도 적응하는 적응형 인간. 학창시절을 시골생활로 보내며 컴퓨터에 관심을 갖는다.',
    });
    this.popBox2 = new PopBox({
      title: '고창고등학교 졸업',
      year: '2014.02',
      aos: 'road-pop-box__aos--2',
      bar: 'road-pop-box__bar--2',
      text: '음악을 좋아하게 된 기간. 게임을 좋아하게 된 기간. 컴퓨터에 관심이 많던 나. 한창 스마트기기가 붐이었을 시 테마를 이쁘게 수정하고싶어서 날을 샌 적이 많은 날들. 내가 하고싶은게 무엇인지 고민이 많던 김희철. 공부를 곧잘하진 못해도 책임감이 강하고 성실했던 김희철! 고창고등학교 개근상! v ^__^ v',
    });
    this.popBox3 = new PopBox({
      title: '남서울대학교 입학',
      year: '2014.03',
      aos: 'road-pop-box__aos--3',
      bar: 'road-pop-box__bar--3',
      text: '남서울대학교 멀티미디어학과로 입학! 컴퓨터로 무언가의 결과물을 내는게 좋았던 나에게는 후회없는 선택. 군대 가기전 놀것도 놀고 성적관리는 B만 넘자는 마음가짐으로 1학년을 마치고 군대를 간다. 군대에서 나에대한 많은 생각을 하다가 코딩이 재밌다는것을 알게되어 상병부터 독학 시작. 전역 후 달라진 마음가짐으로 1년을 열심히 공부하고 컴퓨터에 대해 더 알고싶어 컴퓨터소프트웨어학과로 전과. 웹 프론트엔드가 너무 재미있어 지금도 공부중!!',
    });
    this.popBox4 = new PopBox({
      title: '남서울대학교 졸업예정',
      year: '2020.02',
      aos: 'road-pop-box__aos--4',
      bar: 'road-pop-box__bar--4',
      text: '졸업 예정이긴 하다만 끊임없이 배우고싶은 학생같은 마음가짐을 가지고 졸업하는것이 목표! 배운다는것은 재밌다! 사람들과 많이 교류하고싶다! 투비컨티뉴~',
    });
  }
  
  mount(event) {
    this.rightArrowBox.mount(event);
    this.leftArrowBox.mount(event);
    this.downArrowBox.mount(event);
    this.popBox1.mount(event);
    this.popBox2.mount(event);
    this.popBox3.mount(event);
    this.popBox4.mount(event);
  }
  
  render() {
    return `
    <div class="template-road">
        <div class="section flex-center-sort flex-container flex-column">
            ${this.titleBox.render()}
            ${this.downArrowBox.render()}
        </div>
        <div class="section">
            ${this.popBox1.render()}
        </div>
        <div class="section">
            ${this.popBox2.render()}
        </div>
        <div class="section">
            ${this.popBox3.render()}
        </div>
        <div class="section">
            ${this.popBox4.render()}
            ${this.rightArrowBox.render()}
            ${this.leftArrowBox.render()}
        </div>
    </div>
    `;
  }
}

export default RoadTemplate;