import Component from '../Component.js';

class Nav extends Component {
    onRender(dom) {
        const nextButton = dom.querySelector('#next-button');
        nextButton.addEventListener('click', () =>{
            const nextRound = this.props.nextRound;
            nextRound();
        });
        const refreshButton = dom.querySelector('#refresh-button');
        refreshButton.addEventListener('click', () => {
            const refresh = this.props.refresh;
            refresh();
        });
    }
    renderHTML() {
        return /*html*/`
            <section id="nav">
                <button class="nav-button" onclick="location.href='./user-page.html'">⌂</button>
                <div>
                    <button disabled class="nav-button">◅</button>
                    <button class="nav-button" id="refresh-button">↺</button>
                    <button class="nav-button" id="next-button">▻</button>
                </div>
                <button class="nav-button" onclick="location.href='./tutorial.html'">?</button>
            </section>
        `;
    }
}

export default Nav;