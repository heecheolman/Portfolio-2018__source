import Component from './../../lib/Component';
import ContactButton from './../molecules/ContactButton';

class ContactBox extends Component {
  constructor() {
    super();
    this.githubButton = new ContactButton({
      title: 'github',
      style: 'github contact__button-sns',
      href: 'https://github.com/heecheolman',
    });
    this.facebookButton = new ContactButton({
      title: 'facebook',
      style: 'facebook contact__button-sns',
      href: 'https://www.facebook.com/profile.php?id=100006997631031',
    });
    this.tistoryButton = new ContactButton({
      title: 'tistory',
      style: 'tistory contact__button-sns',
      href: 'http://heecheolman.tistory.com/',
    });
  }
  
  render() {
    return `
      <div class="contact-box flex-container flex-space-between-sort flex-row">
        ${this.githubButton.render()}
        ${this.facebookButton.render()}
        ${this.tistoryButton.render()}
      </div>
    `;
  }
}

export default ContactBox;