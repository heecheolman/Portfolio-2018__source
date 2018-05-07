import Components from '../../lib/Components';
import MeButton from '../molecules/MeButton';
import RoadButton from '../molecules/RoadButton';
import FutureButton from '../molecules/FutureButton';

class HeaderBox extends Components{
  constructor() {
    super();
    this.meButton = new MeButton();
    this.roadButton = new RoadButton();
    this.futureButton = new FutureButton();
  }
  render() {
    return `
      <div class="header flex-container flex-center-sort flex-row">
        ${this.meButton.render()}
        ${this.roadButton.render()}
        ${this.futureButton.render()}
      </div>
    `;
  }
}

export default HeaderBox;