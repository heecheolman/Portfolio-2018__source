import Component from './../../lib/Component';
import PopTitle from './../molecules/PopTitle';
import ProgressBar from './../molecules/ProgressBar';
import PopText from './../molecules/PopText';

class PopBox extends Component {
  constructor() {
    super();
    this.popTitle = new PopTitle();
    this.popText = new PopText();
    this.progressBar = new ProgressBar();
  }
  
  mount(event) {
    this.popTitle.mount(event);
    this.popText.mount(event);
    this.progressBar.mount(event);
  }
  
  render() {
    return `
      <div class="road-pop-box" data-aos="fade-left">
        ${this.popTitle.render()}
        ${this.progressBar.render()}
        ${this.popText.render()}
      </div>
    `;
  }
}

export default PopBox;