import Components from '../../lib/Components';
import HeaderBox from '../organisms/HeaderBox';

class MainTemplate extends Components {
  constructor() {
    super();
    this.headerBox = new HeaderBox();
  }
  
  render() {
    return `
      ${this.headerBox.render()}
    `;
  }
}

export default MainTemplate;