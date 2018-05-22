import Component from './../../lib/Component';

import LeftArrowBox from './../organisms/LeftArrowBox';
import SearchBox from './../organisms/SearchBox';
import DescriptionBox from './../organisms/DescriptionBox';

class FutureTemplate extends Component {
  constructor() {
    super();
    this.leftArrowBox = new LeftArrowBox({
      selector: '.left-arrow',
      template: '.future-template',
      pageName: 'RoadPage',
    });
    this.searchBox = new SearchBox();
    this.descriptionBox = new DescriptionBox();
  }
  
  mount(event) {
    this.leftArrowBox.mount(event);
    this.searchBox.mount(event);
    this.descriptionBox.mount(event);
  }
  
  render() {
    return `
      <div class="future-template flex-container flex-center-sort">
        ${this.leftArrowBox.render()}
        <div class="section flex-center-sort flex-container flex-column">
            ${this.searchBox.render()}
            ${this.descriptionBox.render()}
        </div>
      </div>
    `;
  }
}

export default FutureTemplate;