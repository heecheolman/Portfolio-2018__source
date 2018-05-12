import Component from './../../lib/Component';
import ProgressText from './../molecules/ProgressText';
import ProgressCircle from './../molecules/ProgressCircle';

class ProgressBox extends Component {
  constructor() {
    super();
    this.progressText = new ProgressText();
    this.progressCircle = new ProgressCircle();
  }
  
  mount(event) {
    this.progressText.mount(event);
    this.progressCircle.mount(event);
  }
  
  render() {
    return `
      <div class="progress-box">
        ${this.progressText.render()}
        ${this.progressCircle.render()}
      </div>
    `;
  }
}

export default ProgressBox;