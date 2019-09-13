import GameApp from './components/app/GameApp.js';

const app = new GameApp();
// be consistent, this is how it is in all the other files...
document.body.prepend(app.renderDOM());