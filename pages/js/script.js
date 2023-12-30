const $ = (id) => {
    return document.getElementById(id);
};

let $days = $('days');
let $hours = $('hours');
let $minutes = $('minutes');
let $seconds = $('seconds');

let targetDate = new Date('2023-12-31T23:59');

let updateTimer = () => {
    let totalInSec = Math.floor((targetDate.valueOf() - new Date().valueOf()) / 1000);

    if (totalInSec < 0) {
        totalInSec = 0;
    }

    let seconds = Math.floor(totalInSec % 60);
    let minutes = Math.floor((totalInSec / 60) % 60);
    let hours = Math.floor((totalInSec / 60 / 60) % 24);
    let days = Math.floor(totalInSec / 60 / 60 / 24);

    let format = (num) => {
        return `${num}`.padStart(2, '0');
    }

    $seconds.innerText = format(seconds);
    $minutes.innerText = format(minutes);
    $hours.innerText = format(hours);
    $days.innerText = format(days);
};

setInterval(updateTimer, 1000);

let createSnowFlake = () => {
    let $snow = document.createElement('i');
    $snow.classList.add('fas', 'fa-snowflake', 'snowflake');

    $snow.style.left = `${Math.random() * window.innerWidth}px`;
    $snow.style.animationDuration = `${(Math.random() * 3 + 2)}s`;
    $snow.style.opacity = Math.random();
    $snow.style.fontSize = `${Math.random() * 20}px`;
    $snow.style.filter = 'blur(1px)';

    document.body.appendChild($snow);
    $snow.onanimationend = () => {
        $snow.remove();
    };

    requestAnimationFrame(createSnowFlake);
};

requestAnimationFrame(createSnowFlake);
