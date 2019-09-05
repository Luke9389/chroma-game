import Component from '../Component.js';
import Gameplay from '../game/Gameplay.js';
import Nav from '../nav/Nav.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import { randomColor, randomWholeNum } from '../game/randomize-location.js';
import store from '../../services/store.js';

class GameApp extends Component {
    onRender(dom) {
        //api call
        //gameplay props = api stuff OR local storage stuff
        

        let props = {
            scheme: [],
            count: 0
        };

        const gameplay = new Gameplay(props);
        dom.appendChild(gameplay.renderDOM());

        function nextRound() {
            const numOfColors = randomWholeNum(2) + 5;
            const ranColor = randomColor();
            getColorAPI(ranColor, numOfColors)
                .then(rawData => {
                    const scheme = toScheme(rawData);
                    store.saveScheme(scheme);
    
                    const colorProps = {
                        scheme: scheme,
                        count: numOfColors
                    };
                    gameplay.update(colorProps);
                });
        }
        nextRound();

        function refresh() {
            const savedScheme = store.getScheme();
            props = {
                scheme: savedScheme,
                count: savedScheme.length
            };
            gameplay.update(props);
        }
        const navProps = {
            nextRound: nextRound,
            refresh: refresh
        };

        const nav = new Nav(navProps);
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