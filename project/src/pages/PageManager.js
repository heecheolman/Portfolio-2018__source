import Manager from './../lib/Manager';

import MainPage from './MainPage';
import RoadPage from './RoadPage';
import FuturePage from './FuturePage';

class PageManager extends Manager {
  constructor() {
    super();
    // 메인페이지를 추가함
    this.AddPage(new MainPage());
    this.AddPage(new RoadPage());
    this.AddPage(new FuturePage());
  }
  
  mount(pageName) {
    return super.mount(pageName);
  }
  
  render(pageName) {
    return super.render(pageName);
  }
}

export default PageManager;