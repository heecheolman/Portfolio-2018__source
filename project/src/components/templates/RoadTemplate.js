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
      title: '🎬',
      style: 'title',
    });
    this.rightArrowBox = new RightArrowBox({
      selector: '.right-arrow',
      template: '.template-road',
      pageName: 'FuturePage',
    });
    this.leftArrowBox = new LeftArrowBox({
      selector: '.left-arrow',
      template: '.template-road',
      pageName: 'MainPage',
    });
    this.downArrowBox = new DownArrowBox();
    this.popBox1 = new PopBox({
      title: '출생',
      year: '1995.09.18',
      aos: 'first-road',
      bar: 'first-bar',
    });
    this.popBox2 = new PopBox({
      title: '고창고등학교 졸업',
      year: '2014.02',
      aos: 'second-road',
      bar: 'second-bar',
    });
    this.popBox3 = new PopBox({
      title: '남서울대학교 입학',
      year: '2014.03',
      aos: 'third-road',
      bar: 'third-bar',
    });
    this.popBox4 = new PopBox({
      title: '남서울대학교 졸업예정',
      year: '2020.02',
      aos: 'fourth-road',
      bar: 'fourth-bar',
    });
  }
  
  mount(event) {
    this.titleBox.mount(event);
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
            <div class="road-pop-area flex-container flex-center-sort">
                ${this.popBox1.render()}
            </div>
        </div>
        <div class="section">
            <div class="road-pop-area flex-container flex-center-sort">
                ${this.popBox2.render()}
            </div>
        </div>
        <div class="section">
            <div class="road-pop-area flex-container flex-center-sort">
                ${this.popBox3.render()}
            </div>
        </div>
        <div class="section">
            <div class="road-pop-area flex-container flex-center-sort">
                ${this.popBox4.render()}
                ${this.rightArrowBox.render()}
                ${this.leftArrowBox.render()}
            </div>
        </div>
    </div>
    `;
  }
}

export default RoadTemplate;