import Component from './../../lib/Component';
import Title from './../atoms/Title';

class TitleArea extends Component {
  constructor() {
    super();
    this.title = new Title({
      title: 'road',
      style: 'road-title',
    });
  }
  
  render() {
    return `
      <div class="flex-container flex-center-sort flex-column">
        ${this.title.render()}
      </div>
    `;
  }
}

export default TitleArea;