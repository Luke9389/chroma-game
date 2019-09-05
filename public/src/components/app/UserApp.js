import Component from '../Component.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import { randomColor } from '../game/randomize-location.js';
import { getUserHistory } from '../../services/auth-api.js';
import store from '../../services/store.js';

class UserApp extends Component {
    onRender() {
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

        function loadUserHistory() {
            const userId = store.getUserId();
            getUserHistory(userId)
                .then(rounds => {
                    console.log(rounds);
                    rounds.forEach(round => {
                        const colorArray = round.colors;
                        
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
            <section id="color-set-1">
                <div class="col-1"></div>
                <div class="col-2"></div>
                <div class="col-3"></div>
                <div class="col-4"></div>
                <div class="col-5"></div>
                <div class="col-6"></div>   
            </section>
            <section id="color-set-2">
                <div class="col-1"></div>
                <div class="col-2"></div>
                <div class="col-3"></div>
                <div class="col-4"></div>
                <div class="col-5"></div>  
            </section>
            <section id="color-set-3">
                <div class="col-1"></div>
                <div class="col-2"></div>
                <div class="col-3"></div>
                <div class="col-4"></div>
                <div class="col-5"></div>
                <div class="col-6"></div>   
                <div class="col-7"></div>  
            </section>
    </main>
    </div>
        `;
    }
}

export default UserApp;