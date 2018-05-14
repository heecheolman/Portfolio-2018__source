import Component from '../../lib/Component';

class SVG extends Component {
  constructor({ svg }) {
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