import './../css/main.css';
import PageManager from './pages/PageManager';
import Router from './router/Router';

const AOS = require('aos');
AOS.init({
  delay: 150,
});

const Page = new PageManager();
const PageRouter = new Router(Page);

PageRouter.route('/', 'MainPage');
PageRouter.route('/road', 'RoadPage');
PageRouter.route('/future', 'FuturePage');
PageRouter.route('/product', 'ProductPage');
PageRouter.route('/contact', 'ContactPage');