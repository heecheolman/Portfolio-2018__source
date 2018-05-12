import Component from '../../lib/Component';
import A from '../atoms/A';
import Router from './../../router/Router';

class Road extends Component {
  constructor() {
    super();
    this.a = new A({
      text: 'road',
      style: 'header-road-a',
    });
  }
  mount(event) {
    // const t = document.querySelector('.header-road-a');
    // t.addEventListener('click', () => {
    //   Router.moveToLocation('RoadPage');
    // });
  }
  render() {
    return `
      <div class="header-road-wrapper">
        ${this.a.render()}
      </div>
    `;
  }
}

export default Road;