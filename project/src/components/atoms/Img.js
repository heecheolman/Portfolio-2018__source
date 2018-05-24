import Component from './../../lib/Component';

class Img extends Component {
  constructor({ alt, src }) {
    super();
    this.src = src;
    this.alt = alt;
  }
  
  render() {
    return `
        <img alt="${this.alt}" class="product-img" src="${this.src}"/>
    `;
  }
}

export default Img;