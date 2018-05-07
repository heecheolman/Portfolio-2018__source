import Components from '../../lib/Components';
import Button from '../atoms/Button';

class RoadButton extends Components {
  constructor() {
    super();
    this.button = new Button({
      title: 'road',
      style: 'main-header-road-button',
    });
  }
  
  render() {
    return `
      <div class="main-header-road-wrapper">
        ${this.button.render()}
      </div>
    `;
  }
}

export default RoadButton;