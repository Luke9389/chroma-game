import store from '../../../services/store.js';

export const forgetColor = () => {
    store.removeColor();
    store.removeLocation();
};

export const placeColor = (button) => {
    button.style.backgroundColor = store.getColor();
};

export const swapColor = (button, dom) => {
    const oldLocationId = store.getLocation();
    const oldLocation = dom.querySelector(`#${oldLocationId}`);
    oldLocation.style.backgroundColor = button.style.backgroundColor;
    placeColor(button);
};

export const pickUpColor = (button) => {
    store.saveColor(button.style.backgroundColor);
    store.saveLocation(button.id);
};