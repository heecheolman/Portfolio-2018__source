import Component from './../../lib/Component';
import Descript from './../molecules/Descript';

class DescriptionBox extends Component {
  constructor() {
    super();
    this.descript = new Descript();
  }
  
  render() {
    return `
      <div class="description-box flex-center-sort flex-container">
        ${this.descript.render()}
      </div>
    `;
  }
}

export default DescriptionBox;