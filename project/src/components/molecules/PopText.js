import Component from './../../lib/Component';
import P from './../atoms/P';

class PopText extends Component {
  constructor({ text }) {
    super();
    this.text = text;
    this.p = new P({
      text: this.text,
      style: 'road-pop-box__text',
    });
  }
  
  render() {
    return `
      <div class="road-pop-box__text-wrapper">
        ${this.p.render()}
      </div>
    `;
  }
}

export default PopText;