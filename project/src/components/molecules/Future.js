import Component from '../../lib/Component';
import A from '../atoms/A';

class Future extends Component {
  constructor() {
    super();
    this.a = new A({
      link: '#',
      text: 'future',
      style: 'header-future-a',
    });
  }
  
  render() {
    return `
      <div class="header-future-wrapper">
        ${this.a.render()}
      </div>
    `;
  }
}

export default Future;