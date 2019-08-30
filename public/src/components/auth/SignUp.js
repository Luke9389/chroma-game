import Component from '../Component.js';

class SignUp extends Component {

    onRender(form) {
        const onSignUp = this.props.onSignUp;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const user = {
                displayName: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            onSignUp(user);
        });
    }

    renderHTML() {
        return /*html*/`
        <form id="sign-up">
            <h1>Sign Up</h1>
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