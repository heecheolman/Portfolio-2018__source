import Component from './../../lib/Component';

import TitleBox from './../organisms/TitleBox';
import RightArrowBox from './../organisms/RightArrowBox';
import LeftArrowBox from './../organisms/LeftArrowBox';
import DownArrowBox from './../organisms/DownArrowBox';
import PopBox from './../organisms/PopBox';

class RoadTemplate extends Component {
  constructor() {
    super();
    this.titleBox = new TitleBox();
    this.rightArrowBox = new RightArrowBox({
      selector: '.right-arrow',
      template: '.road-template',
      pageName: 'FuturePage',
    });
    this.leftArrowBox = new LeftArrowBox({
      selector: '.left-arrow',
      template: '.road-template',
      pageName:  'MainPage',
    });
    this.downArrowBox = new DownArrowBox();
    this.popBox = new PopBox();
  }
  
  mount(event) {
    this.titleBox.mount(event);
    this.rightArrowBox.mount(event);
    this.leftArrowBox.mount(event);
    this.downArrowBox.mount(event);
    this.popBox.mount(event);
  }
  
  render() {
    return `
    <div class="road-template">
        <div class="section flex-center-sort flex-container flex-column">
            ${this.titleBox.render()}
            ${this.downArrowBox.render()}
        </div>
        <div class="section">
            <div class="road-pop-area flex-container flex-center-sort">
                ${this.popBox.render()}
            </div>
        </div>
        <div class="section flex-container flex-center-sort">
            ${this.rightArrowBox.render()}
            ${this.leftArrowBox.render()}
        </div>
    </div>
    `;
  }
}

export default RoadTemplate;