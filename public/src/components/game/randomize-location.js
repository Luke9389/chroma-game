function randomizeLocation(arr) {
    arr.forEach((colorObject, i) => {
        colorObject.location = `p${i}`; 
        
    });
    
    let num = arr.length;
    num += 1;
    
    const randomArray = arr.slice();
    const random = [];
          
    for(let i = 0; i < arr.length; i++) {
        num--;
    
        const randomNumber = randomWholeNum(num);
          
        const randomObject = randomArray[randomNumber];
        
        randomArray.splice(randomNumber, 1);
        random.push(randomObject);
    }
    return random;
}

export function randomWholeNum(num) {
    return Math.floor(Math.random() * num);
}

export function randomColor() {
    const r = Math.floor(Math.random() * 220);
    const g = Math.floor(Math.random() * 220);
    const b = Math.floor(Math.random() * 220);
    return `rgb(${r + 50}, ${g + 50}, ${b + 50})`;
}

export default randomizeLocation;