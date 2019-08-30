import Component from '../Component.js';
import store from '../../services/store.js';
import SignUp from '../auth/SignUp.js';
import SignIn from '../auth/SignIn.js';

function success(user) {
    store.setToken(user.token);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || './game.html';
}

class AuthApp extends Component {

    onRender(dom) {
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
        signInContainer.appendChild(signUp.renderDOM());

        const signIn = new SignIn({
            onSignIn: credentials => {
                error.textContent = '';

                return userSignIn(credentials)
                    .then(user => {
                        success(user);
                    })
                    .catch(err => {
                        errors.textContent = err;
                    });
            }
        });
    }

    renderHTML() {
        return /*html*/`
        <div>
            <main>
                <p class="errors"></p>
                <section class="no-display" id="signup-container">
                    <p class="switch">
                        <button id="signin-button">Already a user?</button>
                    </p>
                </section>
                <section class="no-display" id="signin-container">
                    <p class="switch">
                        <button id="signup-button">Make an account</button>
                    </p>
                </section>
            </main>
        </div>
        `;
    }
}

export default AuthApp;