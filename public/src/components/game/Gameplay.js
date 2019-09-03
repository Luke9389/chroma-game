import Component from '../Component.js';
import store from '../../services/store.js';
// import Palette from '../game/Palette.js';
// import Board from '../game/Board.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import randomizeLocation from '../game/randomize-location.js';
import { randomColor, randomWholeNum } from '../game/randomize-location.js';

class Gameplay extends Component {
    onRender(dom) {
        function loadColors() {
            const randColor = randomColor();
            const numOfColors = randomWholeNum(2) + 5;
            getColorAPI(randColor, numOfColors)
                .then(rawData => {
                    const scheme = toScheme(rawData);
                    const randomScheme = randomizeLocation(scheme);
                    for(let i = 0; i < randomScheme.length; i++) {
                        const colorObject = randomScheme[i];
                        const paletteLocation = dom.querySelector('#palette-section');
                        const button = document.createElement('button');
                        button.id = colorObject.location; 
                        button.classList.add('palette-button');
                        button.style = `background:${colorObject.color}`;
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
                        paletteLocation.appendChild(button);
        
                    }
                });     
        }
        loadColors();
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
        
    }

    renderHTML() {
        return /*html*/`
            <section id="gameplay">
              <section id="palette-section">
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