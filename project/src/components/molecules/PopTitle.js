import Component from './../../lib/Component';
import Title from './../atoms/Title';

class PopTitle extends Component {
  constructor({ title, year}) {
    super();
    this.title = title;
    this.year = year;
    
    this.title = new Title({
      title: this.title,
      style: 'road-pop-box__title',
    });
    this.year = new Title({
      title: this.year,
      style: 'road-pop-box__year',
    });
  }
  
  mount(event) {
  
  }
  render() {
    return `
      <div class="road-pop-box__title-wrapper flex-container flex-space-between-sort">
        ${this.title.render()}
        ${this.year.render()}
      </div>
    `;
  }
}

export default PopTitle;