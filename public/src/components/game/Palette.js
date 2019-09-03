import Component from '../Component.js';

class Palette extends Component {
    onRender() {
        const props = this.props.palette;
        console.log(props);
        console.log('is this firing');
    }
    renderHTML() {
        return /*html*/`
            <section id="palette-section">
                <button class="palette-button"></button>
                <button class="palette-button"></button>
                <button class="palette-button"></button>
                <button class="palette-button"></button>
                <button class="palette-button"></button>
                <button class="palette-button"></button>
                <button class="palette-button"></button>
            <section>
        `;
    }
}

export default Palette;