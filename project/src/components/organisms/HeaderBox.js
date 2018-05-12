import Component from '../../lib/Component';
import Me from '../molecules/Me';
import Road from '../molecules/Road';
import Future from '../molecules/Future';

class HeaderBox extends Component{
  constructor() {
    super();
    this.me = new Me();
    this.road = new Road();
    this.future = new Future();
  }
  
  mount(event){
    this.me.mount(event);
    this.road.mount(event);
    this.future.mount(event);
  }
  
  render() {
    return `
      <div class="header flex-container flex-center-sort flex-row">
        ${this.me.render()}
        ${this.road.render()}
        ${this.future.render()}
      </div>
    `;
  }
}

export default HeaderBox;