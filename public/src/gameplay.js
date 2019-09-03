import GameApp from './components/app/GameApp.js';

const app = new GameApp();
const root = document.getElementById('root');
root.appendChild(app.renderDOM());