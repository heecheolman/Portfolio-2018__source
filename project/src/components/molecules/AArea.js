import Component from './../../lib/Component';
import A from './../atoms/A';

class AArea extends Component {
  constructor({ title, style, href }) {
    super();
    this.a = new A({
      title: title,
      style: style,
      href: href,
    });
  }
  
  render() {
    return `
      <div class="flex-container flex-center-sort flex-column">
        ${this.a.render()}
      </div>
    `;
  }
}

export default AArea;