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

function randomWholeNum(num) {
    return Math.floor(Math.random() * num);
}

export default randomizeLocation;