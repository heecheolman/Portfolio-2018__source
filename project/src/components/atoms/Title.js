import Component from '../../lib/Component';

class Title extends Component {
  constructor({ title, style }) {
    super();
    this.title = title;
    this.style = style;
  }
  
  render() {
    return `
      <p class="${this.style} common_p zero">
        ${this.title}
      </p>
    `;
  }
}

export default Title;


/**
 * Title 과 P 의 차이가 없다. 구분 ㄱ
 */