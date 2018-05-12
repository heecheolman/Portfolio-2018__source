import Component from './../../lib/Component';
import SVG from './../atoms/SVG';

class ProgressCircle extends Component {
  constructor() {
    super();
    this.circle = new SVG({
      svg: `<svg viewbox="0 0 36 36">
  <path
    d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
    fill="none"
    stroke="#ffffff";
    stroke-width="1";
    stroke-dasharray="1000";
  />
</svg>`,
      style: '',
    });
  }
  
  mount(event) {
  
  }
  
  render() {
    return `
      <div class="circle-wrapper">
        ${this.circle.render()}
      </div>
    `;
  }
}

export default ProgressCircle;