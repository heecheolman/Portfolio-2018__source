import Component from '../../lib/Component';

class Button extends Component {
  constructor({ href, title, style }) {
    super();
    this.title = title;
    this.style = style;
    this.href = href;
  }
  
  render() {
    return `
    <a href="${this.href}" target="_blank">
      <button class="${ this.style } common--button">${ this.title }</button>
    </a>
    `;
  }
}

export default Button;