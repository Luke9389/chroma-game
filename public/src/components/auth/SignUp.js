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
            <h1 class="animated bounceInDown" id="aletter0">C</h1> 
            <h1 class="animated bounceInDown" id="aletter1">h</h1> 
            <h1 class="animated bounceInDown" id="aletter2">r</h1> 
            <h1 class="animated bounceInDown" id="aletter3">o</h1> 
            <h1 class="animated bounceInDown" id="aletter4">m</h1> 
            <h1 class="animated bounceInDown" id="aletter5">a</h1>
            <p>Sign Up</p>
            <div>
                <input required name="user-name" type="text" placeholder="Your User Name">
            </div>
            
            <div>
                <input required name="password" type="password" placeholder="Password">
            </div>

            <input type="submit">
        </form>
    `;
    } 
}

export default SignUp;