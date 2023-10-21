document.addEventListener('DOMContentLoaded', function () {
    let pop_up = document.getElementById('pop-up');
    let button_accept = document.getElementById('accept');
    let button_reject = document.getElementById('reject');

    let audio = document.getElementById('myMusique'); 
    let button = document.querySelector('.audiobutton');
    let isRidding = true;

    button_reject.addEventListener('click', () => {
        audio.pause();
    });

    button_accept.addEventListener('click', () => {
        audio.play();
    });
});  