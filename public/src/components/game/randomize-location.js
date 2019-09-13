function randomizeLocation(arr) {
    
    let num = arr.length;
    num += 1;
    
    const copyArray = arr.slice();
    const random = [];
    
    for(let i = 0; i < arr.length; i++) {
        num--;
        const randomNumber = randomWholeNum(num);
        
        const randomObject = copyArray[randomNumber];
        copyArray.splice(randomNumber, 1);
        
        random.push(randomObject);
    }

    random.forEach((colorObject, i) => {
        colorObject.location = `p${i}`; // why "p0" and not just a index number like 0?
    });

    return random;
}

export function randomWholeNum(num) {
    return Math.floor(Math.random() * num);
}

function getRandomColorValue() {
    return randomWholeNum(220) + 30;
}

export function randomColor() {
    const r = getRandomColorValue();
    const g = getRandomColorValue();
    const b = getRandomColorValue();
    return `rgb(${r},${g},${b})`;
}

export default randomizeLocation;