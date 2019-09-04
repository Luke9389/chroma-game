import Component from '../Component.js';

class SignUp extends Component {

    onRender(form) {
        const onSignUp = this.props.onSignUp;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const user = {
                userName: formData.get('user-name'),
                password: formData.get('password')
            };

            onSignUp(user);
        });
    }

    renderHTML() {
        return /*html*/`
        <form id="sign-up">
            <h1>Chroma</h1>
            <p>Sign Up</p>
            <div>
                <input required name="user-name" type="text" placeholder="Your User Name">
            </div>
            
            <div>
                <input required name="password" type="text" placeholder="Password">
            </div>

            <input type="submit">
        </form>
    `;
    } 
}

export default SignUp;