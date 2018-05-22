import Component from './../../lib/Component';
import SearchBar from './../molecules/SearchBar';

class SearchBox extends Component {
  constructor() {
    super();
    this.searchBar = new SearchBar();
  }
  
  mount(event) {
    this.searchBar.mount(event);
  }
  
  render() {
    return `
      <div class="search-box flex-container flex-center-sort">
        ${this.searchBar.render()}
      </div>
    `;
  }
}

export default SearchBox;