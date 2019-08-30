const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');


signIn.addEventListener('submit', event =>{
    event.preventDefault();
    
    const formData = new FormData(signIn);
    
    const credentials = {
        displayName: formData.get('user-name'),
        password: formData.get('password')
    };

    onSignIn(credentials);
});