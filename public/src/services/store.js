const TOKEN_KEY = 'token';
const savedColor = 'savedColor';
const savedLocation = 'savedLocation';
const userName = 'userName';

export default {
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },
    setToken(token) {
        return localStorage.setItem(TOKEN_KEY, token);
    },
    hasToken() {
        return this.getToken() !== null;
    },
    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },
    setUserName(user) {
        localStorage.setItem(userName, user);
    },
    getColor() {
        return localStorage.getItem(savedColor);
    },
    saveColor(color) {
        return localStorage.setItem(savedColor, color);
    },
    removeColor() {
        localStorage.removeItem(savedColor);
    },
    saveLocation(location) {
        return localStorage.setItem(savedLocation, location);
    },
    getLocation() {
        return localStorage.getItem(savedLocation);
    },
    removeLocation() {
        localStorage.removeItem(savedLocation);
    },
};

