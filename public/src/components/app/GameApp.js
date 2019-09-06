import Component from '../Component.js';
import Gameplay from '../game/Gameplay.js';
import Nav from '../nav/Nav.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import { randomColor, randomWholeNum } from '../game/randomize-location.js';
import store from '../../services/store.js';
import { getUserHistory } from '../../services/auth-api.js';

class GameApp extends Component {
    onRender(dom) {
        let props = {
            scheme: [],
            count: 0
        };

        const gameplay = new Gameplay(props);
        dom.appendChild(gameplay.renderDOM());

        function nextRound() {
            const numOfColors = randomWholeNum(6) + 5;
            const ranColor = randomColor();
            getColorAPI(ranColor, numOfColors)
                .then(rawData => {
                    const scheme = toScheme(rawData, true);
                    store.saveScheme(scheme);

                    const colorProps = {
                        scheme: scheme,
                        count: scheme.length
                    };
                    gameplay.update(colorProps);
                });
        }
        nextRound();

        function lastRound(page) {
            const userId = store.getUserId();
            getUserHistory(userId)
                .then(data => {
                    const lastScheme = data.slice(`-${page}`);
                    return lastScheme[0].colors;
                })
                .then(colors => {
                    const newScheme = [];
                    for(let i = 0; i < colors.length; i++) {
                        const obj = {
                            id: i,
                            color: colors[i]
                        };
                        newScheme.push(obj);
                    }
                    props = {
                        scheme: newScheme,
                        count: newScheme.length
                    };
                    gameplay.update(props);
                });
        }
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
            lastRound: lastRound,
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