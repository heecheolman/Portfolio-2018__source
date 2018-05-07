import Components from '../../lib/Components';
import Button from '../atoms/Button';

class FutureButton extends Components {
  constructor() {
    super();
    this.button = new Button({
      title: 'future',
      style: 'main-header-future-button',
    });
  }
  
  render() {
    return `
      <div class="main-header-future-wrapper">
        ${this.button.render()}
      </div>
    `;
  }
}

export default FutureButton;