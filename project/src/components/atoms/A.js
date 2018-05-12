import Component from '../../lib/Component';

class A extends Component {
  constructor({ style, text }) {
    super();
    this.style = style;
    this.text = text;
  }
  
  render() {
    return `
      <a class="${this.style} common_a">${this.text}</a>
    `;
  }
}

export default A;