import Component from '../../lib/Component';
import A from '../atoms/A';
import Router from './../../router/Router';

class Me extends Component {
  constructor() {
    super();
    this.a = new A({
      text: 'me',
      style: 'header-me-a',
    });
  }
  
  mount(event){
    // const t = document.querySelector('.header-me-a');
    // t.addEventListener('click', () => {
    //   Router.moveToLocation('MainPage');
    //   // });
    // });
  }
  
  render() {
    return `
      <div class="header-me-wrapper">
        ${this.a.render()}
      </div>
    `;
  }
}

export default Me;