import Component from '../Component.js';

class AboutApp extends Component {
    renderHTML() {
        return /*html*/ `
        <div class="about">
            <div class="people">
              <div class="color" id="luke"></div>
              <h1 class="name">Luke</h1>
              <p class="hobbies">video games, not having his bike stolen</p>
            </div>

            <div class="people">
              <div class="color" id="jose"></div>
              <h1 class="name">Jose</h1>
              <p class="hobbies">Cozy places, disrupting the insurance market</p>
            </div>

            <div class="people">
              <div class="color" id="pat"></div>
              <h1 class="name">Pat</h1>
              <p class="hobbies">Nature and the outdoors</p>
            </div>

            <div class="people">
              <div class="color" id="maeve"></div>
              <h1 class="name">Maeve</h1>
              <p class="hobbies">Anything that isn't writing copy</p>
            </div>
        </div>
        `;
    }
}

export default AboutApp;