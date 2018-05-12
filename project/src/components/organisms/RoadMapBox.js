import Component from './../../lib/Component';
import ProgressBox from './ProgressBox';


class RoadMapBox extends Component {
  constructor() {
    super();
    this.progressBox = new ProgressBox();
  }
  
  mount(event) {
    this.progressBox.mount(event);
  }
  
  render() {
    return `
      <div class="road-map-box flex-center-sort flex-container">
        ${this.progressBox.render()}
      </div>
    `;
  }
}

export default RoadMapBox;
