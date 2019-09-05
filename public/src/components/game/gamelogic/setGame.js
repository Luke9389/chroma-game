import store from '../../../services/store.js';
import { addRound } from '../../../services/chroma-api.js';

export const createPaletteButton = (colorObject) => {
    const button = document.createElement('button');
    button.id = colorObject.location;
    button.classList.add('palette-button');
    button.style = `background:${colorObject.color}`;
    return button;
};

export const createBoardButton = (i) => {
    const boardButton = document.createElement('button');
    boardButton.id = `b${i}`;
    boardButton.classList.add('board-button');
    boardButton.style = 'background:black';
    return boardButton;
};

export const checkForWin = (numOfColors, scheme, winBanner, dom) => {
    let winFlag = 0;
    const buttonArr = dom.querySelectorAll('.board-button');
    for(let i = 0; i < numOfColors; i++) {
        const color = scheme[i].color;
        if(`background: ${color};` === `${buttonArr[i].attributes.style.nodeValue}`) {
            winFlag += 1;
        }
        if(winFlag === numOfColors) {
            const savedScheme = scheme.map(obj => obj.color);
            const round = {
                colors: savedScheme,
                count: numOfColors,
                user_id: store.getUserId()
            };
            addRound(round);
            winBanner.classList.toggle('hidden');
        }
    }
};