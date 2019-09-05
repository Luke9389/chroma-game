import Component from '../Component.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import { randomColor } from '../game/randomize-location.js';
import { getUserHistory } from '../../services/auth-api.js';
import store from '../../services/store.js';

class UserApp extends Component {
    onRender(dom) {
        const backgroundGradient = document.querySelector('html');
        function loadGradient() {
            const randomRBG = randomColor();
            getColorAPI(randomRBG, 6)
                .then(rawData => {
                    const colorArray = toScheme(rawData, false);
                    backgroundGradient.style = `background: -webkit-linear-gradient(180deg, ${colorArray[0].color} 0%, ${colorArray[5].color} 100%);`;

                });
        }
        loadGradient();
        const main = dom.querySelector('main');
        function loadUserHistory() {
            const userId = store.getUserId();
            getUserHistory(userId)
                .then(rounds => {
                    rounds.forEach((roundObj, i) => {
                        const roundSection = document.createElement('section');
                        roundSection.id = `color-set-${i}`;
                        main.appendChild(roundSection);
                        
                        const colorArray = roundObj.colors;
                        colorArray.forEach((color, j) => {
                            const colorDiv = document.createElement('dev');
                            colorDiv.classList.add(`col-${j}`);
                            colorDiv.style = `background:${color}; flex-grow: 1;`;
                            roundSection.appendChild(colorDiv);
                            
                        });
                    });
                });
        }
        loadUserHistory();
    }
    renderHTML() {
        return /*html*/`
        <div id="container">
        <header>
            <h1>Hi Jose</h1>
            <p>Here is the colors you've sorted</p>
        </header>
        <main>

        </main>
        </div>
        `;
    }
}

export default UserApp;