import Component from './../../lib/Component';
import LeftArrowBox from './../organisms/LeftArrowBox';
import TitleBox from './../organisms/TitleBox';
import ContactBox from './../organisms/ContactBox';


class ContactTemplate extends Component {
  constructor() {
    super();
    this.leftArrowBox = new LeftArrowBox({
      selector: '.left-arrow',
      template: '.template-contact',
      pageName: 'ProductPage',
    });
    this.titleBox = new TitleBox({
      title: '🤩️',
      style: 'title',
    });
    this.contactBox = new ContactBox();
  }
  
  mount(event) {
    this.leftArrowBox.mount(event);
  }
  
  render() {
    return `
      <div class="template-contact flex-container flex-center-sort flex-column">
        <div class="section flex-center-sort flex-container flex-column">
           ${this.titleBox.render()}
           ${this.contactBox.render()}
        </div>
        ${this.leftArrowBox.render()}
      </div>
    `;
  }
}

export default ContactTemplate;