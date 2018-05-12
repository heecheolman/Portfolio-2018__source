import Component from '../../lib/Component';
import Title from './../atoms/Title';

class ProfileTitle extends Component {
  constructor() {
    super();
    this.title = new Title({
      title: '김희철',
      style: 'main-content-title zero',
    });
  }
  
  render() {
    return `
      <div class="main-content-title-wrapper">
        ${this.title.render()}
      </div>
    `;
  }
}

export default ProfileTitle;