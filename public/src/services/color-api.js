import { request } from './request.js';

const COLOR_API = 'https://www.thecolorapi.com/scheme';

export function getColorAPI(color, count) {
    const url = `${COLOR_API}?rgb=${color}&count=${count}&mode=monochrome`;
    return request(url);
}

// This should called as part of above function
export function toScheme(data, bool) {
    if(bool){
        data.colors.shift();
    }
    const colorArray = data.colors;
    const scheme = colorArray.map((color, idx) => {
        return {
            id: idx, 
            color: color.rgb.value
        };
    });
    return scheme;
}
