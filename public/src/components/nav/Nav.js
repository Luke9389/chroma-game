import Component from '../Component.js';

class Nav extends Component {
    onRender(dom) {
        let backPage = 1;

        const nextButton = dom.querySelector('#next-button');
        nextButton.addEventListener('click', () =>{
            this.props.nextRound();
        });
        
        const refreshButton = dom.querySelector('#refresh-button');
        refreshButton.addEventListener('click', () => {
            this.props.refresh();
        });
        
        const lastButton = dom.querySelector('#last-button');
        lastButton.addEventListener('click', () => {
            this.props.lastRound(backPage);
            backPage++;
        });
    }
    
    renderHTML() {
        return /*html*/`
            <section id="nav">
                <button class="nav-button" onclick="location.href='./user-page.html'">⌂</button>
                <div>
                    <button class="nav-button" id="last-button">◅</button>
                    <button class="nav-button" id="refresh-button">↺</button>
                    <button class="nav-button" id="next-button">▻</button>
                </div>
                <button class="nav-button" onclick="location.href='./tutorial.html'">?</button>
            </section>
        `;
    }
}

export default Nav;