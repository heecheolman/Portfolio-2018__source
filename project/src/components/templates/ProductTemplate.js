import Component from './../../lib/Component';
import RightArrowBox from './../organisms/RightArrowBox';
import LeftArrowBox from './../organisms/LeftArrowBox';
import TitleBox from './../organisms/TitleBox';
import DownArrowBox from './../organisms/DownArrowBox';
import ProductBox from './../organisms/ProductBox';
import { production } from './../assets/Production';


class ProductTemplate extends Component {
  constructor() {
    super();
    this.rightArrowBox = new RightArrowBox({
      selector: '.right-arrow',
      template: '.product-template',
      pageName: 'ContactPage',
    });
    this.leftArrowBox = new LeftArrowBox({
      selector: '.left-arrow',
      template: '.product-template',
      pageName: 'FuturePage',
    });
    this.titleBox = new TitleBox({
      title: '🎁',
      style: 'title',
    });
    this.downArrowBox = new DownArrowBox();
    
    this.production__1 = new ProductBox({
      src: production[0].src,
      title: production[0].title,
      text: production[0].text,
      alt: production[0].alt,
      href: production[0].href,
    });
  }
  
  mount(event) {
    this.leftArrowBox.mount(event);
    this.rightArrowBox.mount(event);
    this.downArrowBox.mount(event);
    this.production__1.mount(event);
  }
  
  render() {
    return `
      <div class="product-template flex-container flex-center-sort flex-column">
        <div class="section flex-center-sort flex-container">
            ${this.titleBox.render()}
        </div>
        <div class="section flex-center-sort flex-container">
            ${this.production__1.render()}
        </div>
        <div class="section flex-center-sort flex-container">
            ${this.production__1.render()}
        </div>
        <div class="section flex-center-sort flex-container">
            ${this.production__1.render()}
        </div>
        <div class="section flex-center-sort flex-container">
            ${this.production__1.render()}
        </div>
        ${this.leftArrowBox.render()}
        ${this.rightArrowBox.render()}
        ${this.downArrowBox.render()}
      </div>
    `;
  }
}

export default ProductTemplate;