import Component from './../../lib/Component';
import TitleArea from './../molecules/TitleArea';

class TitleBox extends Component {
  constructor({ title, style }) {
    super();
    this.titleArea = new TitleArea({
      title: title,
      style: style,
    });
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