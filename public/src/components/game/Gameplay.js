import Component from '../Component.js';
import store from '../../services/store.js';
// import Palette from '../game/Palette.js';
// import Board from '../game/Board.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import randomizeLocation from '../game/randomize-location.js';
import { randomColor, randomWholeNum } from '../game/randomize-location.js';

class Gameplay extends Component {
    onRender(dom) {
        forgetColor();
        function loadColors() {
            const randColor = randomColor();
            const numOfColors = randomWholeNum(2) + 5;
            for(let i = 0; i < numOfColors; i++) {
                const boardButton = document.createElement('button');
                boardButton.id = `b${i}`;
                boardButton.classList.add('board-button');
                boardButton.style = 'background:black';
                const board = dom.querySelector('#board-section');
                board.appendChild(boardButton);
            }
            getColorAPI(randColor, numOfColors)
                .then(rawData => {
                    const scheme = toScheme(rawData);
                    const randomScheme = randomizeLocation(scheme);
                    for(let i = 0; i < randomScheme.length; i++) {
                        const colorObject = randomScheme[i];
                        const paletteLocation = dom.querySelector('#palette-section');
                        const button = createPaletteButton(colorObject);
                        button.addEventListener('click', () => {
                            if(store.getColor()) {
                                if(button.style.backgroundColor) {
                                    const oldLocationId = store.getLocation();
                                    const oldLocation = dom.querySelector(`#${oldLocationId}`);
                                    oldLocation.style.backgroundColor = button.style.backgroundColor;
                                    placeColor(button);
                                    forgetColor();
                                } else {
                                    placeColor(button);
                                    forgetColor();
                                }
                            }
                            else {
                                store.saveColor(button.style.backgroundColor);
                                store.saveLocation(button.id);
                            }
                            let winFlag = 0;
                            const buttonArr = dom.querySelectorAll('.board-button');
                            for(let i = 0; i < numOfColors; i++) {
                                const color = scheme[i].color;
                                if(`background: ${color};` === `${buttonArr[i].attributes.style.nodeValue}`) {
                                    winFlag += 1;
                                }
                                if(winFlag === numOfColors) {
                                    console.log('YOU WIN!!!!');
                                }
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
                        forgetColor();
                    } else {
                        button.style.backgroundColor = store.getColor();
                        forgetColor();
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
              </section>
            </section>
        `;
    }
}

const forgetColor = () => {
    store.removeColor();
    store.removeLocation();
};

const createPaletteButton = (colorObject) => {
    const button = document.createElement('button');
    button.id = colorObject.location;
    button.classList.add('palette-button');
    button.style = `background:${colorObject.color}`;
    return button;
};

const placeColor = (button) => {
    button.style.backgroundColor = store.getColor();
};



export default Gameplay;