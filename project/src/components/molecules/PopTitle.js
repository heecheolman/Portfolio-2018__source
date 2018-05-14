import Component from './../../lib/Component';
import Title from './../atoms/Title';

class PopTitle extends Component {
  constructor() {
    super();
    this.title = new Title({
      title: '출생',
      style: 'road-pop-title'
    });
  }
  
  mount(event) {
    /*
    * pop 되면 progress bar classList.add('progressing')
    *
    * */
  }
  
  render() {
    return `
      <div class="road-pop-title-wrapper">
        ${this.title.render()}
      </div>
    `;
  }
}

export default PopTitle;