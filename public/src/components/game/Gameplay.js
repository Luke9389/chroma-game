import Component from '../Component.js';
import Palette from '../game/Palette.js';
import Board from '../game/Board.js';
import { getColor } from '../../services/color-api.js';

class Gameplay extends Component {
    onRender(dom) {

        const palette = new Palette({ palette: [] });
        dom.appendChild(palette.renderDOM());

        const board = new Board();
        dom.appendChild(board.renderDOM());
        function loadColors() {
            getColor()
                .then(colorList => {
                    colorList.forEach(colorObject => {
                        colorObject.location = 'n/a';
                    });
                    palette.update({ colorList });
                });
        }
        loadColors();
    }

    renderHTML() {
        return /*html*/`
            <section id="gameplay"></section>
        `;
    }
}

export default Gameplay;