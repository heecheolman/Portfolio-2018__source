import Component from '../../lib/Component';

import ProfileSVG from '../molecules/ProfileSVG';
import ProfileTitle from '../molecules/ProfileTitle';
import ProfileDesc from '../molecules/ProfileDesc';


class ProfileBox extends Component {
  constructor() {
    super();
    this.profileSVG = new ProfileSVG();
    this.profileTitle = new ProfileTitle();
    this.profileDesc = new ProfileDesc();
  }
  
  render() {
    return `
      <div class="main-content-box flex-container flex-center-sort flex-column center-sort">
        ${this.profileSVG.render()}
        ${this.profileTitle.render()}
        <div class="main-content-box__line"></div>
        ${this.profileDesc.render()}
      </div>
    `;
  }
}

export default ProfileBox;