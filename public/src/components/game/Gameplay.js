import Component from '../Component.js';
import store from '../../services/store.js';
// import Palette from '../game/Palette.js';
// import Board from '../game/Board.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import randomizeLocation from '../game/randomize-location.js';
import { randomColor, randomWholeNum } from '../game/randomize-location.js';

class Gameplay extends Component {
    onRender(dom) {
        const buttonArray = dom.querySelectorAll('[class$="button"]');
        buttonArray.forEach(button => {
            button.addEventListener('click', () => {
                if(store.getColor()) {
                    if(button.style.backgroundColor) {
                        const oldLocationId = store.getLocation();
                        const oldLocation = dom.querySelector(`#${oldLocationId}`);
                        oldLocation.style.backgroundColor = button.style.backgroundColor;
                        button.style.backgroundColor = store.getColor();
                        store.removeColor();
                        store.removeLocation();
                    } else {
                        button.style.backgroundColor = store.getColor();
                        store.removeColor();
                        store.removeLocation();
                    }
                }
                else {
                    store.saveColor(button.style.backgroundColor);
                    store.saveLocation(button.id);
                }
            });
        });
        const randColor = randomColor();
        let numOfColors = randomWholeNum(2) + 5;

        function loadColors() {
            getColorAPI(randColor, numOfColors)
                .then(rawData => {
                    const scheme = toScheme(rawData);
                    const randomScheme = randomizeLocation(scheme);
                    console.log(randomScheme);
                });     
        }
        loadColors();
        
    }

    renderHTML() {
        return /*html*/`
            <section id="gameplay">
              <section id="palette-section">
                <button id="p0" class="palette-button"></button>
                <button id="p1" class="palette-button"></button>
                <button id="p2" class="palette-button"></button>
                <button id="p3" class="palette-button"></button>
                <button id="p4" class="palette-button"style="background:purple;"></button>
                <button id="p5" class="palette-button"style="background:green;"></button>
                <button id="p6" class="palette-button" style="background:blue;"></button>
              </section>
              <section id="board-section">
                <button id="b0" class="board-button"></button>
                <button id="b1" class="board-button"></button>
                <button id="b2" class="board-button"></button>
                <button id="b3" class="board-button"></button>
                <button id="b4" class="board-button"></button>
                <button id="b5" class="board-button"></button>
                <button id="b6" class="board-button"></button>
                <button id="b7" class="board-button"></button>
              <section>
            </section>
        `;
    }
}

export default Gameplay;