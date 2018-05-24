import Component from './../../lib/Component';
import ProductImg from './../molecules/ProductImg';
import AArea from './../molecules/AArea';
import ProductText from './../molecules/ProductText';

class ProductBox extends Component {
  constructor({ src, title, text, alt, href }) {
    super();
    this.titleImg = new ProductImg({
      src: src,
      alt: alt,
    });
    this.a = new AArea({
      title: title,
      style: 'product-title',
      href: href,
    });
    
    this.text = new ProductText({
      text: text,
    });
    
  }
  
  render() {
    return `
      <div class="product-box flex-container flex-center-sort flex-column" data-aos="zoom-in-left">
        ${this.titleImg.render()}
        <div class="text-section flex-container flex-center-sort flex-column">
            ${this.a.render()}
            ${this.text.render()}
        </div>
      </div>
    `;
  }
}

export default ProductBox;