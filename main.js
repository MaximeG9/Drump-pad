let button = document.querySelectorAll('.key');
// console.log(button);
let sound = document.querySelectorAll('audio[data-key]');
// console.log(sound);

window.addEventListener("keypress", playSound);

function removeTransition(pressedButton) {
    document.addEventListener('transitionend', () => {
        pressedButton.classList.remove('playing');
    })
}


function playSound(event) {
    if (event.keyCode === 65) {
        sound[0].play();
        button[0].classList.add('playing');
        removeTransition(button[0]);
    } else if (event.keyCode === 90) {
        sound[1].play();
        button[1].classList.add('playing');
        removeTransition(button[1]);
    } else if (event.keyCode === 69) {
        sound[2].play();
        button[2].classList.add('playing');
        removeTransition(button[2]);
    } else if (event.keyCode === 81) {
        sound[3].play();
        button[3].classList.add('playing');
        removeTransition(button[3]);
    } else if (event.keyCode === 83) {
        sound[4].play();
        button[4].classList.add('playing');
        removeTransition(button[4]);
    } else if (event.keyCode === 68) {
        sound[5].play();
        button[5].classList.add('playing');
        removeTransition(button[5]);
    } else if (event.keyCode === 87) {
        sound[6].play();
        button[6].classList.add('playing');
        removeTransition(button[6]);
    } else if (event.keyCode === 88) {
        sound[7].play();
        button[7].classList.add('playing');
        removeTransition(button[7]);
    } else if (event.keyCode === 67) {
        sound[8].play();
        button[8].classList.add('playing');
        removeTransition(button[8]);
    }

}




