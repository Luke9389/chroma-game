import Component from '../Component.js';
import Gameplay from '../game/Gameplay.js';
import Nav from '../nav/Nav.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import { randomColor, randomWholeNum } from '../game/randomize-location.js';
import store from '../../services/store.js';
import { getUserHistory } from '../../services/auth-api.js';

class GameApp extends Component {
    onRender(dom) {
        const gameplay = new Gameplay({
            scheme: [],
            count: 0
        });
        dom.appendChild(gameplay.renderDOM());

        function nextRound() {
            const numOfColors = randomWholeNum(6) + 5;
            const ranColor = randomColor();
            getColorAPI(ranColor, numOfColors)
                .then(rawData => {
                    // not sure why this one needs to shift()?
                    const scheme = toScheme(rawData, true);
                    store.saveScheme(scheme);

                    gameplay.update({
                        scheme: scheme,
                        count: scheme.length
                    });
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

                    gameplay.update({
                        scheme: newScheme,
                        count: newScheme.length
                    });
                });
        }
        
        function refresh() {
            const savedScheme = store.getScheme();
            gameplay.update({
                scheme: savedScheme,
                count: savedScheme.length
            });
        }

        const nav = new Nav({
            nextRound: nextRound,
            lastRound: lastRound,
            refresh: refresh
        });
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