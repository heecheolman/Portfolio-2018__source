import Component from './../../lib/Component';

class Label extends Component {
  constructor() {
    super();
  }
  
  mount(event) {
  
  }
  
  render() {
    return `
      <label class="typing">
        present || future
      </label>
    `;
  }
}

export default Label;