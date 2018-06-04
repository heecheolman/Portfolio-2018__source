import Component from '../../lib/Component';

import ProfileSVG from '../molecules/ProfileSVG';
import ProfileTitle from '../molecules/ProfileTitle';
import ProfileDesc from '../molecules/ProfileDesc';


class ContentBox extends Component {
  constructor() {
    super();
    this.profileSVG = new ProfileSVG();
    this.profileTitle = new ProfileTitle();
    this.profileDesc = new ProfileDesc();
  }
  
  mount(event){
    this.profileTitle.mount(event);
    this.profileSVG.mount(event);
    this.profileDesc.mount(event);
  }
  
  render() {
    return `
      <div class="main-content-box flex-container flex-center-sort flex-column center-sort">
        ${this.profileSVG.render()}
        ${this.profileTitle.render()}
        ${this.profileDesc.render()}
      </div>
    `;
  }
}

export default ContentBox;