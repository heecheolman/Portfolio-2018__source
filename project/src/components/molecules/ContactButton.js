import Component from './../../lib/Component';
import Button from './../atoms/Button';

class ContactButton extends Component {
  constructor ({ title, style, href }) {
    super();
    this.button = new Button({
      title: title,
      style: style,
      href: href,
    });
  }
  
  render() {
    return `
      <div class="contact__button-sns-wrapper">
        ${this.button.render()}
      </div>
    `;
  }
}

export default ContactButton;