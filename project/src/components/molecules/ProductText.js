import Component from './../../lib/Component';
import P from './../atoms/P';

class ProductText extends Component {
  constructor({ text }) {
    super();
    this.text = new P({
      text: text,
      style: 'product-box__text-section__desc',
    });
  }
  
  render() {
    return `
      <div class="product-box__text-section__desc-wrapper">
        ${this.text.render()}
      </div>
    `;
  }
}

export default ProductText;