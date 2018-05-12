import Component from '../../lib/Component';

class SVG extends Component {
  constructor({ svg, style }) {
    super();
    this.svg = svg;
  }
  
  mount(event) {
  }
  
  render() {
    return `
      ${this.svg}
    `;
  }
}

export default SVG;