import Component from '../Component.js';
import store from '../../services/store.js';

function success(user) {
    store.setToken(user.token);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || './game.html';
}

class AuthApp extends Component {
    renderHTML() {
        return /html/`
            
        `;
    }
}

export default AuthApp;