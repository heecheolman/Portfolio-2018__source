import Component from './../../lib/Component';
import SVG from './../atoms/SVG';

class ProgressBar extends Component {
  constructor({ aos, bar }) {
    super();
    this.aos = aos;
    this.bar = bar;
    this.svg = new SVG({
      svg: `
        <svg width="100%" height="5px" x="0px" y="0px">
            <path class="road-pop-box__progress-bar ${this.bar}" d="M0 0 l1500 0"/>
        </svg>
      `,
    });
  }
  
  mount(event) {
    const aosEle = document.querySelector(`.${this.aos}`);
    const bar = document.querySelector(`.${this.bar}`);
    window.addEventListener('scroll', () => {
      aosEle.classList.contains('aos-animate') ? bar.classList.add('road-pop-box__progress-bar--progressing') : bar.classList.remove('road-pop-box__progress-bar--progressing');
    });
  }
  
  render() {
    return `
      <div class="road-pop-box__progress-bar-wrapper">
        ${this.svg.render()}
      </div>
    `;
  }
}

export default ProgressBar;