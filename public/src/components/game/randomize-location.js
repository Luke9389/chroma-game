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
        colorObject.location = `p${i}`; 
    });
    return random;
}

export function randomWholeNum(num) {
    return Math.floor(Math.random() * num);
}

export function randomColor() {
    const r = Math.floor(Math.random() * 220);
    const g = Math.floor(Math.random() * 220);
    const b = Math.floor(Math.random() * 220);
    return `rgb(${r + 30},${g + 30},${b + 30})`;
}

export default randomizeLocation;