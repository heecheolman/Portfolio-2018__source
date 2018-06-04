import Component from './../../lib/Component';
import Store from './../../lib/Storage';

class Input extends Component {
  constructor() {
    super();
    this.store = new Store();
  }
  
  mount(event) {
    const inputEle = document.querySelector('.search-bar');
    const label = document.querySelector('.typing');
    
    // innerHTML 을 위한 element 얻어오기
    const descBox = document.querySelector('.base');
    
    let basic = true;
    let descEle = null;
    
    inputEle.addEventListener('input', () => {
      // label 효과
      if(inputEle.value.length !== 0) {
        label.classList.add('typed');
      }else {
        label.classList.remove('typed');
      }
      
      if(inputEle.value === 'present') {
        descBox.innerHTML = this.store.option.present.render();
        descEle = document.querySelector('.descript--present');
        descEle.classList.add('fade_In');
        basic = false;
      }else if(inputEle.value === 'future') {
        descBox.innerHTML = this.store.option.future.render();
        descEle = document.querySelector('.descript--future');
        descEle.classList.add('fade_In');
        basic = false;
      }else if(!basic) {
        descBox.innerHTML = this.store.option.basic.render();
        descEle = document.querySelector('.descript--basic');
        descEle.classList.add('fade_In');
        basic = true;
      }
    });
  }
  
  render() {
    return `
      <input type="text" class="search-bar" name="search">
    `;
  }
}

export default Input;