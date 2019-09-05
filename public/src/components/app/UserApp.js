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
                    const colorArray = toScheme(rawData);
                    backgroundGradient.style = `background: -webkit-linear-gradient(180deg, ${colorArray[0].color} 0%, ${colorArray[5].color} 100%);`;
        
                });
        }
        loadGradient();

        function loadUserHistory() {
            const userId = store.getUserId();
            getUserHistory(userId)
                .then(stuff => {
                    console.log(stuff);
                });
        }
        loadUserHistory();
    }
    renderHTML() {
        return /*html*/`
            
        `;
    }
}

export default UserApp;