import Component from '../../lib/Component';
import Router from './../../router/Router';
import SVG from './../atoms/SVG';

class LeftArrow extends Component {
  constructor({ selector, template, pageName}) {
    super();
    this.selector = selector;
    this.template = template;
    this.pageName = pageName;
    this.arrow = new SVG({
      svg: `<svg x="0px" y="0px" viewBox="0 0 477.175 477.175" class="left-arrow" style="enable-background:new 0 0 477.175 477.175;" width="30px" height="30px">
              <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z" fill="#FFFFFF"/>
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

export default LeftArrow;


