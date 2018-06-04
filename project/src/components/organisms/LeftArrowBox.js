import Component from './../../lib/Component';
import LeftArrow from './../molecules/LeftArrow';

class LeftArrowBox extends Component{
  constructor({ selector, template, pageName }) {
    super();
    this.leftArrow = new LeftArrow({
      selector: selector,
      template: template,
      pageName: pageName
    });
  }
  
  mount(event){
    this.leftArrow.mount(event);
  }
  
  render(){
    return `
      <div class="arrow-left-wrapper flex-container flex-center-sort">
        ${this.leftArrow.render()}
      </div>
    `;
  }
}

export default LeftArrowBox;