let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minuteNumber = document.querySelector('.minutes'),
    hourNumber = document.querySelector('.hours');


function clock () {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

    sec.style = `transform: rotate(${seconds}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

    setTimeout(() => clock(),1000);
    
}
clock();


// Рекурсия это когда функция вызывает саму себя

// let x = 0;

// function rek() {
//     console.log(x);
//     if(x < 100) {
//         x++
//         rek()
//     }
// }
// rek();


let links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');


for(let i = 0; i < links.length;i++) {
    links[i].addEventListener('click',function(e) {
       e.preventDefault();
       for(let x = 0; x < links.length;x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
       }
       this.classList.add('active');
       tabs[i].classList.add('active');
    })
}

function stopwatch() {
    let stopwatchBtn = document.querySelector('.stopwatch__btn'),
        tabSpan = document.querySelector('.tabsLink__span'),
        stopwatchHours = document.querySelector('.stopwatch__hours'),
        stopwatchMinutes = document.querySelector('.stopwatch__minutes'),
        stopwatchSeconds = document.querySelector('.stopwatch__seconds');

    function init()
    {
        secTime = 0;
        minTime = 0;
        hourTime = 0;
        timeout = setInterval(tick, 1000);
    };
    function tick()
    {
        secTime++;
        stopwatchSeconds.innerHTML = secTime;
        if(secTime == 60) {
            secTime = 0;
            stopwatchSeconds.innerHTML = '0';
            minTime++;
            stopwatchMinutes.innerHTML = minTime;
        }else if(minTime == 60) {
            minTime = 0;
            stopwatchMinutes.innerHTML = '0';
            hourTime++;
            stopwatchHours.innerHTML = hourTime;
        }
    };
    function stop() {
        clearTimeout(timeout);
    }
    function clearTime() {
        stopwatchHours.innerHTML = '0'
        stopwatchMinutes.innerHTML = '0'
        stopwatchSeconds.innerHTML = '0'
    }

    stopwatchBtn.addEventListener('click', () => {
        tabSpan.classList.add('active');
        if(stopwatchBtn.innerHTML == 'start') {
            stopwatchBtn.innerHTML = 'stop';
            init();
        }else if(stopwatchBtn.innerHTML == 'stop') {
            stop();
            stopwatchBtn.innerHTML = 'clear';
            tabSpan.classList.remove('active');
            tabSpan.classList.add('active_clear');
        }else if(stopwatchBtn.innerHTML == 'clear') {
            clearTime();
            stopwatchBtn.innerHTML = 'start';
            tabSpan.classList.remove('active_clear');
            tabSpan.classList.remove('active');
        }
    });
}
stopwatch();