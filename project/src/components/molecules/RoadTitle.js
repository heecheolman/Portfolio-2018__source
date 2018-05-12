import Component from './../../lib/Component';
import Title from './../atoms/Title';

class RoadTitle extends Component {
  constructor() {
    super();
    this.title = new Title({
      title: 'Road',
      style: 'road-title'
    });
  }
  
  mount(event) {
    this.title.mount(event);
  }
  
  render() {
    return `
      ${this.title.render()}
    `;
  }
}

export default RoadTitle;