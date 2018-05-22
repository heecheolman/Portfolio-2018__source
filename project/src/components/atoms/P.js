import Component from '../../lib/Component';

class P extends Component {
  constructor({ text, style }) {
    super();
    this.text = text;
    this.style = style;
  }
  
  render() {
    return `
        <p class="${this.style} common_p zero">
            ${this.text}
        </p>
      `;
  }
}


export default P;