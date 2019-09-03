import Component from '../Component.js';

class Board extends Component {
    renderHTML() {
        return /*html*/`
            <section id="board-section">
                <button class="board-button"></button>
                <button class="board-button"></button>
                <button class="board-button"></button>
                <button class="board-button"></button>
                <button class="board-button"></button>
                <button class="board-button"></button>
                <button class="board-button"></button>
                <button class="board-button"></button>
            <section>
        `;
    }
}

export default Board;