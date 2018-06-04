import Component from './../../lib/Component';
import RightArrow from './../molecules/RightArrow';

class RightArrowBox extends Component{
  constructor({ selector, template, pageName}) {
    super();
    this.rightArrow = new RightArrow({
      selector: selector,
      template: template,
      pageName: pageName
    });
  }
  
  mount(event){
    this.rightArrow.mount(event);
  }
  
  render(){
    return `
      <div class="arrow-right-wrapper flex-container flex-center-sort">
        ${this.rightArrow.render()}
      </div>
    `;
  }
}

export default RightArrowBox;