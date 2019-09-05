import UserApp from './components/app/UserApp.js';

const app = new UserApp();
document.body.prepend(app.renderDOM());