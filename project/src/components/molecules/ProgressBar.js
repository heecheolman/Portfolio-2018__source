import Component from './../../lib/Component';
import SVG from './../atoms/SVG';

class ProgressBar extends Component {
  constructor() {
    super();
    this.svg = new SVG({
      svg: `
        <svg width="600px" height="5px" x="0px" y="0px">
            <path class="road-progress-bar" d="M0 0 l600 0"/>
        </svg>
      `,
    });
  }
  
  mount(event) {
    const aosEle = document.querySelector('.road-pop-box');
    const bar = document.querySelector('.road-progress-bar');
    
    window.addEventListener('scroll', () => {
      aosEle.classList.contains('aos-animate') ? bar.classList.add('progressing') : bar.classList.remove('progressing');
    });
  }
  
  render() {
    return `
      <div class="road-progress-wrapper">
        ${this.svg.render()}
      </div>
    `;
  }
}

export default ProgressBar;