import Component from '../Component.js';
import store from '../../services/store.js';
// import Palette from '../game/Palette.js';
// import Board from '../game/Board.js';
// import { getColorAPI, toScheme } from '../../services/color-api.js';
import randomizeLocation from '../game/randomize-location.js';
// import { randomColor, randomWholeNum } from '../game/randomize-location.js';
import { createPaletteButton, createBoardButton, checkForWin } from './gamelogic/setGame.js';
import { forgetColor, placeColor, swapColor, pickUpColor } from './gamelogic/colorActions.js';

class Gameplay extends Component {
    onRender(dom) {
        forgetColor();
        const scheme = this.props.scheme;
        const count = this.props.count;
        const randomScheme = randomizeLocation(scheme);
        //make palette buttons
        const paletteLocation = dom.querySelector('#palette-section');
        for(let i = 0; i < count; i++) {
            const colorObject = randomScheme[i];
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
                else { pickUpColor(button); }
                checkForWin(count, scheme, dom);
            });
            paletteLocation.appendChild(button);
        }
        //make board buttons 
        for(let i = 0; i < count; i++) {
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
                else { pickUpColor(boardButton); }
                checkForWin(count, scheme, dom);
            });
            const board = dom.querySelector('#board-section');
            board.appendChild(boardButton);
        }
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