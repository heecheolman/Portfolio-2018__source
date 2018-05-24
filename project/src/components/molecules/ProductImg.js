import Component from './../../lib/Component';
import Img from './../atoms/Img';

class ProductImg extends Component {
  constructor({ src, alt }) {
    super();
    this.productImg = new Img({
      src: src,
      alt: alt,
    });
  }
  
  render() {
    return `
      <div class="productImg-wrapper">
        ${this.productImg.render()}
      </div>
    `;
  }
}

export default ProductImg;