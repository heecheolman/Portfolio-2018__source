const routeList = {};
const state = {};

class Router {
  constructor(manager) {
    this.manager = manager;
    state.location = '/';
    window.addEventListener('hashchange', () => this.router(this.manager));
    window.addEventListener('load', () => this.router(this.manager));
  }
  
  // 담는다.
  route(path, locationId) {
    routeList[path] = {
      locationId: locationId,
      controller: `${this.manager.render(locationId)}`,
    };
  }
  
  // 뿌려준다.
  router(manager) {
    this.el = this.el || document.getElementById('app');
    const url = location.hash.slice(1) || '/';
    const urlChk = url === state.location ? url : state.location;
    location.hash = urlChk;
    const route = routeList[urlChk];
    // null 이나 undefined 가 아니라면 렌더링
    if(this.el && route.controller) {
      this.el.innerHTML = route.controller;
      manager.mount(route.locationId);
    }
  }
  
  static moveToLocation(pageName) {
    const page = Object.keys(routeList).find(key => routeList[key].locationId === pageName);
    if(page === undefined || page === null) {
      console.log('없는 주소 입니다');
      return;
    }
    
    state.location = page;
    location.href = ((location.href.split('/')[3] === '#') ? location.href : location.href) + page;
  }
  
  
}

export default Router;