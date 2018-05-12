import './../css/main.css';
import PageManager from './pages/PageManager';
import Router from './router/Router';

const Page = new PageManager();
const PageRouter = new Router(Page);


PageRouter.route('/', 'MainPage');
PageRouter.route('/road', 'RoadPage');
PageRouter.route('/future', 'FuturePage');