import Components from '../../lib/Components';
import Button from '../atoms/Button';

class MeButton extends Components {
  constructor() {
    super();
    this.button = new Button({
      title: 'me',
      style: 'main-header-me-button',
    });
  }
  
  render() {
    return `
      <div class="main-header-me-wrapper">
        ${this.button.render()}
      </div>
    `;
  }
}

export default MeButton;