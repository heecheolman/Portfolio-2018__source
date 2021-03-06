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
      <a class="${this.style} common--a" href="${this.href}" target="_blank">${this.title}</a>
    `;
  }
}

export default A;