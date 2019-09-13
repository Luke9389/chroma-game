export function playRandomButtonSound(buttonSounds, silence) {
    const randomIndex = Math.floor(Math.random() * buttonSounds.length);
    buttonSounds[randomIndex].play();
    silence.play();
}
