'use strict';
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    const className = document.body.className;
    if(className == 'light-theme'){
        this.textContent = 'Dark';
    } else {
        this.textContent = 'Light';
    }

    console.log('current class name: ' + className);
});

let intervalID=null;
let isRunning=false;

const audioElement = document.getElementById('theme-audio');
audioElement.volume=0.1;
const toggleBratButton = document.getElementById('brat-toggle-btn');
toggleBratButton.addEventListener('click', function() {
    if (!isRunning) {
        isRunning = true;
        this.textContent = 'Stop Brat';

        audioElement.currentTime = 0;
        audioElement.play();

        intervalID = setInterval(() => {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
        }, 200);
    } else {
        isRunning = false;
        this.textContent = 'Brat';

        audioElement.pause();
        audioElement.currentTime = 0;
        clearInterval(intervalID);
    }
    
});
