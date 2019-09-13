import Component from '../Component.js';
import store from '../../services/store.js';
import SignUp from '../auth/SignUp.js';
import SignIn from '../auth/SignIn.js';
import { signUp as userSignUp, signIn as userSignIn } from '../../services/auth-api.js';
import { getColorAPI, toScheme } from '../../services/color-api.js';
import { randomColor } from '../game/randomize-location.js';

function success(user) {
    store.setToken(user.token);
    store.setUserId(user.id);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || '/gameplay.html';
}

class AuthApp extends Component {
    onRender(dom) {
        store.removeLocation();
        store.removeColor();
        const errors = dom.querySelector('.errors');
        const signUpContainer = dom.querySelector('#signup-container');
        const signInContainer = dom.querySelector('#signin-container');

        const signUp = new SignUp({
            onSignUp: newUser => {
                errors.textContent = '';

                return userSignUp(newUser)
                    .then(user => {
                        success(user);
                    })
                    .catch(err => {
                        errors.textContent = err;
                    });
            }
        });
        signUpContainer.prepend(signUp.renderDOM());

        const signIn = new SignIn({
            onSignIn: credentials => {
                errors.textContent = '';

                return userSignIn(credentials)
                    .then(user => {
                        success(user);
                    })
                    .catch(err => {
                        errors.textContent = err;
                    });
            }
        });
        signInContainer.prepend(signIn.renderDOM());

        const switchToSignIn = dom.querySelector('#signin-button');
        switchToSignIn.addEventListener('click', () => {
            signInContainer.classList.remove('no-display');
            signUpContainer.classList.add('no-display');
        });

        const switchToSignUp = dom.querySelector('#signup-button');
        switchToSignUp.addEventListener('click', () => {
            signUpContainer.classList.remove('no-display');
            signInContainer.classList.add('no-display');
        });
        const backgroundGradient = document.querySelector('html');

        const chromaLetters = dom.querySelectorAll('.letters');

        function loadGradient() {
            const randomRBG = randomColor();
            const LENGTH = 6;
            getColorAPI(randomRBG, LENGTH)
                .then(rawData => {
                    const colorArray = toScheme(rawData, false);
                    // no need for browser prefix, good support: https://caniuse.com/#search=linear-gradient
                    // set the specific style, not the whole thing
                    backgroundGradient.style.background = `linear-gradient(180deg, ${colorArray[0].color} 0%, ${colorArray[5].color} 100%)`;
                    
                    colorArray.forEach((colorObj, i) => {
                        const chromaLetter = chromaLetters[i];
                        chromaLetter.style.color = colorObj.color;
                    });

                    const aboutUsLink = dom.querySelector('#about-us-link');
                    aboutUsLink.style.color = colorArray[LENGTH - 2].color;
                });
        }
        loadGradient();
    }

    renderHTML() {
        return /*html*/`
        
            <div id="background">
                <main id="flex-container">
                    <h1 class="animated bounceInDown" class="letter">C</h1> 
                    <h1 class="animated bounceInDown" class="letter">h</h1> 
                    <h1 class="animated bounceInDown" class="letter">r</h1> 
                    <h1 class="animated bounceInDown" class="letter">o</h1> 
                    <h1 class="animated bounceInDown" class="letter">m</h1> 
                    <h1 class="animated bounceInDown" class="letter">a</h1>

                    <p class="errors"></p>
                    <section class="no-display" id="signup-container">
                        <p class="switch">
                            <button id="signin-button">Already a user?</button>
                        </p>
                        <a href="./about-us.html">Made by the Chroma Squad</a>

                    </section>
                    <section class="" id="signin-container">
                        <p class="switch">
                            <button id="signup-button">Make an account</button>
                        </p>
                        <a id="about-us-link" href="./about-us.html">Made by the Chroma Squad</a>

                    </section>
                </main>
            </div>
    
        `;
    }
}

export default AuthApp;