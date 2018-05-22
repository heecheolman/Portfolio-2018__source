import Component from './../../lib/Component';
import TitleArea from './../molecules/TitleArea';

class TitleBox extends Component {
  constructor() {
    super();
    this.titleArea = new TitleArea();
  }
  
  mount(event) {
    this.titleArea.mount(event);
  }
  
  render() {
    return `
      <div class="title-box flex-container flex-center-sort">
        ${this.titleArea.render()}
      </div>
    `;
  }
}

export default TitleBox;