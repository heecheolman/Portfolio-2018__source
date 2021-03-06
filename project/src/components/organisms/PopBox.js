import Component from './../../lib/Component';
import PopTitle from './../molecules/PopTitle';
import ProgressBar from './../molecules/ProgressBar';
import PopText from './../molecules/PopText';

class PopBox extends Component {
  constructor({ title, year, aos, bar, text }) {
    super();
    this.title = title;
    this.year = year;
    this.aos = aos;
    this.bar = bar;
    this.text = text;
    
    this.popTitle = new PopTitle({
      title: this.title,
      year: this.year,
    });
    this.popText = new PopText({
      text: this.text,
    });
    this.progressBar = new ProgressBar({
      aos: this.aos,
      bar: this.bar,
    });
  }
  
  mount(event) {
    this.popTitle.mount(event);
    this.popText.mount(event);
    this.progressBar.mount(event);
  }
  
  render() {
    return `
      <div class="road-pop-wrapper flex-center-sort flex-container">
        <div class="road-pop-box ${this.aos}" data-aos="zoom-out">
          ${this.popTitle.render()}
          ${this.progressBar.render()}
          ${this.popText.render()}
        </div>
      </div>
      
    `;
  }
}

export default PopBox;