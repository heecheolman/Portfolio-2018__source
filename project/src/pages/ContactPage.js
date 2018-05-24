import Component from './../lib/Component';
import Template from './../components/templates/ContactTemplate';

class ContactPage extends Component {
  constructor() {
    super();
    this.template = new Template();
  }
  
  mount(event) {
    this.template.mount(event);
  }
  
  render() {
    return `
      ${this.template.render()}
    `;
  }
}

export default ContactPage;