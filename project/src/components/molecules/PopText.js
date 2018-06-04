import Component from './../../lib/Component';
import P from './../atoms/P';

class PopText extends Component {
  constructor() {
    super();
    this.p = new P({
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      style: 'road-pop-box__text',
    });
  }
  
  mount(event) {
  
  }
  
  render() {
    return `
      <div class="road-pop-box__text-wrapper">
        ${this.p.render()}
      </div>
    `;
  }
}

export default PopText;