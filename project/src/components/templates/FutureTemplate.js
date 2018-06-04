import Component from './../../lib/Component';

import LeftArrowBox from './../organisms/LeftArrowBox';
import RightArrowBox from './../organisms/RightArrowBox';
import SearchBox from './../organisms/SearchBox';
import DescriptionBox from './../organisms/DescriptionBox';

class FutureTemplate extends Component {
  constructor() {
    super();
    this.leftArrowBox = new LeftArrowBox({
      selector: '.left-arrow',
      template: '.template-future',
      pageName: 'RoadPage',
    });
    this.rightArrowBox = new RightArrowBox({
      selector: '.right-arrow',
      template: '.template-future',
      pageName: 'ProductPage',
    });
    this.searchBox = new SearchBox();
    this.descriptionBox = new DescriptionBox();
  }
  
  mount(event) {
    this.leftArrowBox.mount(event);
    this.rightArrowBox.mount(event);
    this.searchBox.mount(event);
    this.descriptionBox.mount(event);
  }
  
  render() {
    return `
      <div class="template-future flex-container flex-center-sort">
        ${this.leftArrowBox.render()}
        ${this.rightArrowBox.render()}
        <div class="section flex-center-sort flex-container flex-column">
            ${this.searchBox.render()}
            ${this.descriptionBox.render()}
        </div>
      </div>
    `;
  }
}

export default FutureTemplate;