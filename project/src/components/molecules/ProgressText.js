import Component from './../../lib/Component';
import Title from './../atoms/Title';

class ProgressText extends Component {
  constructor() {
    super();
    this.title = new Title({
      title: '1995.09.18',
      style: 'progress-text',
    });
  }
  
  mount(event) {
  
  }
  
  render() {
    return `
      <div class="progress-wrapper">
        ${this.title.render()}
      </div>
    `;
  }
}

export default ProgressText;