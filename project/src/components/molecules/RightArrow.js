import Component from '../../lib/Component';
import Router from '../../router/Router';
import SVG from './../atoms/SVG';

class RightArrow extends Component {
  constructor({ selector, template, pageName}) {
    super();
    this.selector = selector;
    this.template = template;
    this.pageName = pageName;
    
    this.arrow = new SVG({
      svg: `<svg x="0px" y="0px" viewBox="0 0 477.175 477.175" class="right-arrow" style="enable-background:new 0 0 477.175 477.175;" width="30px" height="30px">
              <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z   " fill="#FFFFFF"/>
            </svg>`
    });
  }
  
  mount(event) {
    const t = document.querySelector(`${this.selector}`);
    t.addEventListener('click', () => {
      const template = document.querySelector(`${this.template}`);
      template.classList.add('fade_Out');
      template.addEventListener('animationend', () => {
        if(template.classList.contains('fade_In')) return;
        Router.moveToLocation(`${this.pageName}`);
      });
    });
  }
  
  render() {
    return `
      ${this.arrow.render()}
    `;
  }
}

export default RightArrow;
