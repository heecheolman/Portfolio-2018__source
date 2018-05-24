import Component from './../../lib/Component';
import P from './../atoms/P';

class ProductText extends Component {
  constructor({ text }) {
    super();
    this.text = new P({
      text: text,
      style: 'product-text',
    });
  }
  
  render() {
    return `
      <div class="product-text-wrapper">
        ${this.text.render()}
      </div>
    `;
  }
}

export default ProductText;