import store from '../services/store.js';

const token = store.getToken();
if(!token && location.pathname !== '/index.html') {
    const searchParams = new URLSearchParams();
    searchParams.set('redirect', location.pathname);
    location = `index.html?${searchParams.toString()}`;
}

export function requestWithToken(url, options) {
    if(token) {
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
    }

    return request(url, options);
}

export function request(url, options) {
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
