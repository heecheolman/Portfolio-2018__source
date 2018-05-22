import Component from './../../lib/Component';
import SVG from './../atoms/SVG';

class ProgressBar extends Component {
  constructor({ aos, bar }) {
    super();
    this.aos = aos;
    this.bar = bar;
    this.svg = new SVG({
      svg: `
        <svg width="65vw" height="5px" x="0px" y="0px">
            <path class="road-progress-bar ${this.bar}" d="M0 0 l1500 0"/>
        </svg>
      `,
    });
  }
  
  mount(event) {
    const aosEle = document.querySelector(`.${this.aos}`);
    const bar = document.querySelector(`.${this.bar}`);
    const lastSection = document.querySelector('.fourth-road');
    const downArrow = document.querySelector('.down-arrow');
    window.addEventListener('scroll', () => {
      aosEle.classList.contains('aos-animate') ? bar.classList.add('progressing') : bar.classList.remove('progressing');

      if(lastSection.classList.contains('aos-animate')){
        downArrow.style.visibility = 'hidden';
      }else {
        downArrow.style.visibility = 'visible';
      }
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