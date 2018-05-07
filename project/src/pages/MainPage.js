import Components from './../lib/Components';
import Template from '../components/organisms/HeaderBox';

// 메인페이지
class MainPage extends Components{
  constructor() {
    super();
    this.template = new Template();
  }
  
  render() {
    return `${this.template.render()}`;
  }
}

export default MainPage;