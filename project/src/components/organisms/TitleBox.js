import Component from './../../lib/Component';
import RoadTitle from './../molecules/RoadTitle.js';

class TitleBox extends Component {
  constructor() {
    super();
    this.roadTitle = new RoadTitle();
  }
  
  mount(event) {
    this.roadTitle.mount(event);
  }
  
  render() {
    return `
      <div class="road-title-wrapper flex-container flex-center-sort">
        ${this.roadTitle.render()}
      </div>
    `;
  }
}

export default TitleBox;