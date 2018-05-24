import Component from './../lib/Component';
import Template from './../components/templates/ProductTemplate';

class ProductPage extends Component {
  constructor() {
    super();
    this.template = new Template();
  }
  
  mount(event) {
    this.template.mount(event);
  }
  
  render() {
    return `
      ${this.template.render()}
    `;
  }
}

export default ProductPage;