import Component from '../../lib/Component';

class A extends Component {
  constructor({ title, style, href }) {
    super();
    this.title = title;
    this.style = style;
    this.href = href;
  }
  
  render() {
    return `
      <a class="${this.style} common_a" href="${this.href}">${this.title}</a>
    `;
  }
}

export default A;