import Component from './../../lib/Component';
import DownArrow from './../molecules/DownArrow';

class DownArrowBox extends Component {
  constructor () {
    super();
    this.downArrow = new DownArrow();
  }
  
  mount(event) {
    this.downArrow.mount(event);
  }
  
  render() {
    return `
      <div class="arrow-down-wrapper flex-container flex-center-sort">
        ${this.downArrow.render()}
      </div>
    `;
  }
}

export default DownArrowBox;