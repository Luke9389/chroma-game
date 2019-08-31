const request = require('superagent');

const BASE_URL = 'http://www.thecolorapi.com/scheme';


module.exports = {
    getScheme() {

        return request
            .get(BASE_URL)
            .query({ rgb: 'rgb(255, 140, 140)' })
            .query({ count: '5' })
            .query({ mode: 'monochrome' })
            .then(res => {
                return toScheme(res.body);
            });
    }
};

// Help functions for transforming data

function toScheme(data) {
    const colorArray = data.colors;
    const scheme = colorArray.map((color, idx) => {
        return {
            id: idx, 
            color: color.rgb.value
        };
    });
    return scheme;
}


