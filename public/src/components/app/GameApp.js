import Component from '../Component.js';
import Gameplay from '../game/Gameplay.js';
import Nav from '../nav/Nav.js';

class GameApp extends Component {
    onRender(dom) {
        const gameplay = new Gameplay();
        dom.appendChild(gameplay.renderDOM());

        const nav = new Nav();
        dom.appendChild(nav.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <main>
            <!-- Gameplay -->
            <!-- Nav -->
            </main>
        `;
    }
}

export default GameApp;