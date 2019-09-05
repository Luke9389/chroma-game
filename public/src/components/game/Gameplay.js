import Component from '../Component.js';
import store from '../../services/store.js';
import randomizeLocation from '../game/randomize-location.js';
import { createPaletteButton, createBoardButton, checkForWin } from './gamelogic/setGame.js';
import { forgetColor, placeColor, swapColor, pickUpColor } from './gamelogic/colorActions.js';
import { playRandomButtonSound } from './gamesounds.js';

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
                playRandomButtonSound(dom);
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
                const winBanner = dom.querySelector('#win-banner');
                checkForWin(count, scheme, winBanner, dom);
            });
            paletteLocation.appendChild(button);
        }
        //make board buttons 
        for(let i = 0; i < count; i++) {
            const boardButton = createBoardButton(i);
            //give event listener
            boardButton.addEventListener('click', () => {
                playRandomButtonSound(dom);
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
                const winBanner = dom.querySelector('#win-banner');
                checkForWin(count, scheme, winBanner, dom);
            });
            const board = dom.querySelector('#board-section');
            board.appendChild(boardButton);
        }
        if(dom.querySelector('#b0')) {
            const darkestColor = scheme[0].color;
            for(let i = 0; i < count; i++) {
                const darkButton = dom.querySelector(`#p${i}`);
                const blackButton = dom.querySelector('#b0');
                if(darkButton.style.backgroundColor === darkestColor) {
                    pickUpColor(darkButton);
                    swapColor(blackButton, dom);
                }
            }
            const emptyButton = dom.querySelector(`#${store.getLocation()}`);
            paletteLocation.removeChild(emptyButton);
            forgetColor();
        }
    }

    renderHTML() {
        return /*html*/`
                <section id="gameplay">
                    <section id="palette-section">
                    </section>
                    <section id="board-section">
                    </section>
                    <audio id="button-sound-1" src="./assets/buttonSound1.mp3"></audio>
                    <audio id="button-sound-2" src="./assets/buttonSound2.mp3"></audio>
                    <audio id="button-sound-3" src="./assets/buttonSound3.mp3"></audio>
                    <audio id="button-sound-4" src="./assets/buttonSound4.mp3"></audio>
                    <audio id="button-sound-5" src="./assets/buttonSound5.mp3"></audio>
                    <audio id="button-sound-6" src="./assets/buttonSound6.mp3"></audio>
                    <audio id="silence" src="./assets/silence.mp3"></audio>
                    <div id="win-banner" class="hidden">Congratulations!</div>
                </section>
            `;
    }
}

export default Gameplay;