import Component from './../../lib/Component';
import Img from './../atoms/Img';

class ProductImage extends Component {
  constructor({ src, alt }) {
    super();
    this.productImage = new Img({
      src: src,
      alt: alt,
    });
  }
  
  render() {
    return `
      <div class="product-image-wrapper">
        ${this.productImage.render()}
      </div>
    `;
  }
}

export default ProductImage;