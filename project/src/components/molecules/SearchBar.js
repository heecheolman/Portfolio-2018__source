import Component from './../../lib/Component';
import Label from './../atoms/Label';
import Input from './../atoms/Input';

class SearchBar extends Component {
  constructor() {
    super();
    this.input = new Input();
    this.label = new Label();
  }
  
  mount(event) {
    this.input.mount(event);
    this.label.render(event);
  }
  
  render() {
    return `
    <div class="search-bar-wrapper">
        ${this.label.render()}
        ${this.input.render()}
    </div>
    
    `;
  }
}

export default SearchBar;