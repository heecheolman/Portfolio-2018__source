import Component from '../../lib/Component';
import ProfileBox from '../organisms/ProfileBox';
import RightArrowBox from './../organisms/RightArrowBox';


class MainTemplate extends Component {
  constructor() {
    super();
    this.profileBox = new ProfileBox();
    this.rightArrowBox = new RightArrowBox({
      selector: '.arrow-right',
      template: '.template-main',
      pageName: 'RoadPage',
    });
  }
  
  mount(event){
    this.rightArrowBox.mount(event);
  }
  
  render() {
    return `
      <div class="template-main flex-container flex-center-sort">
        ${this.rightArrowBox.render()}
        ${this.profileBox.render()}
      </div>
    `;
  }
}

export default MainTemplate;