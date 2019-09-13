import { requestWithToken } from './request.js';

const URL = '/api';

export function signUp(user) {
    const url = `${URL}/auth/signup`;
    return requestWithToken(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });
}

export function signIn(credentials) {
    const url = `${URL}/auth/signin`;
    return requestWithToken(url, {
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
    return requestWithToken(url);
}

// eslint-disable-next-line no-unused-vars
export function getName(userId) {
    const url = `${URL}/users`;
    return requestWithToken(url);
}