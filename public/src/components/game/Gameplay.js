import Component from '../Component.js';
import store from '../../services/store.js';
// import Palette from '../game/Palette.js';
// import Board from '../game/Board.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import randomizeLocation from '../game/randomize-location.js';
import { randomColor, randomWholeNum } from '../game/randomize-location.js';
import { createPaletteButton, createBoardButton, checkForWin } from './gamelogic/setGame.js';
import { forgetColor, placeColor, swapColor, pickUpColor } from './gamelogic/colorActions.js';

class Gameplay extends Component {
    onRender(dom) {
        forgetColor();
        function loadColors() {
            const randColor = randomColor();
            const numOfColors = randomWholeNum(2) + 5;

            getColorAPI(randColor, numOfColors)
                .then(rawData => {
                    const scheme = toScheme(rawData);
                    console.log(scheme);
                    
                    const randomScheme = randomizeLocation(scheme);
                    //make palette buttons
                    for(let i = 0; i < randomScheme.length; i++) {
                        const colorObject = randomScheme[i];
                        const paletteLocation = dom.querySelector('#palette-section');
                        const button = createPaletteButton(colorObject);
                        //give event listener
                        button.addEventListener('click', () => {
                            if(store.getColor()) {
                                if(button.style.backgroundColor) {
                                    swapColor(button, dom);
                                    forgetColor();
                                } else {
                                    placeColor(button);
                                    forgetColor();
                                }
                            }
                            else {
                                pickUpColor(button);
                            }
                            checkForWin(numOfColors, scheme, dom);
                        });
                        paletteLocation.appendChild(button);
                    }
                    //make board buttons 
                    for(let i = 0; i < numOfColors; i++) {
                        const boardButton = createBoardButton(i);
                        //give event listener
                        boardButton.addEventListener('click', () => {
                            if(store.getColor()) {
                                if(boardButton.style.backgroundColor) {
                                    swapColor(boardButton, dom);
                                    forgetColor();
                                } else {
                                    placeColor(boardButton);
                                    forgetColor();
                                }
                            }
                            else {
                                pickUpColor(boardButton);
                            }
                            checkForWin(numOfColors, scheme, dom);
                        });
                        const board = dom.querySelector('#board-section');
                        board.appendChild(boardButton);
                    }
                });
        }
        loadColors();
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


export default Gameplay;