import Component from './../../lib/Component';

import TitleBox from './../organisms/TitleBox';
import RoadMapBox from './../organisms/RoadMapBox';
import RightArrowBox from './../organisms/RightArrowBox';
import LeftArrowBox from './../organisms/LeftArrowBox';

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
    this.roadMapBox = new RoadMapBox();
  }
  
  mount(event) {
    this.titleBox.mount(event);
    this.rightArrowBox.mount(event);
    this.leftArrowBox.mount(event);
    this.roadMapBox.render(event);
  }
  
  render() {
    return `
    <div class="road-template flex-container flex-center-sort flex-column">
        ${this.leftArrowBox.render()}
        ${this.rightArrowBox.render()}
        ${this.titleBox.render()}
        ${this.roadMapBox.render()}
    </div>
    `;
  }
}

export default RoadTemplate;