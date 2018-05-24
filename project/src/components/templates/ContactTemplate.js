import Component from './../../lib/Component';
import LeftArrowBox from './../organisms/LeftArrowBox';

class ContactTemplate extends Component {
  constructor() {
    super();
    this.leftArrowBox = new LeftArrowBox({
      selector: '.left-arrow',
      template: '.contact-template',
      pageName: 'ProductPage',
    });
  }
  
  mount(event) {
    this.leftArrowBox.mount(event);
  }
  
  render() {
    return `
      <div class="contact-template flex-container flex-center-sort">
        ${this.leftArrowBox.render()}
      </div>
    `;
  }
}

export default ContactTemplate;