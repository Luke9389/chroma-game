import store from './store.js';

const URL = '/api';

const token = store.getToken();
if(!token && location.pathname !== '/index.html') {
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', location.pathname);
    location = `index.html?${searchParams.toString()}`;
}

function fetchWithError(url, options) {
    if(token) {
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
    }

    return fetch(url, options)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                return response.json().then(json => {
                    throw json.error;
                });
            }
        });
}

export function signUp(user) {
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
}

export function signIn(credentials) {
    const url = `${URL}/auth/signin`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    });
}

// eslint-disable-next-line no-unused-vars
export function getUserHistory(userId) {
    const url = `${URL}/rounds`;
    return fetchWithError(url);
}

// eslint-disable-next-line no-unused-vars
export function getName(userId) {
    const url = `${URL}/users`;
    return fetchWithError(url);
}