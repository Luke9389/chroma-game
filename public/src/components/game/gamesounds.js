export function playRandomButtonSound(dom) {
    const buttonSound1 = dom.querySelector('#button-sound-1');
    const buttonSound2 = dom.querySelector('#button-sound-2');
    const buttonSound3 = dom.querySelector('#button-sound-3');
    const buttonSound4 = dom.querySelector('#button-sound-4');
    const buttonSound5 = dom.querySelector('#button-sound-5');
    const buttonSound6 = dom.querySelector('#button-sound-6');
    const silence = dom.querySelector('#silence');

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if(randomNumber === 1) { buttonSound1.play(); }
    else if(randomNumber === 2) { buttonSound2.play(); }
    else if(randomNumber === 3) { buttonSound3.play(); }
    else if(randomNumber === 4) { buttonSound4.play(); }
    else if(randomNumber === 5) { buttonSound5.play(); }
    else if(randomNumber === 6) { buttonSound6.play(); }
    silence.play();
}
