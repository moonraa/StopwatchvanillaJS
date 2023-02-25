const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');


let seconds = 0;
let minutes = 0;
let hours = 0;


let timerInterval = null;
let timerStatus = "stopped";


function stopWatch(){

    seconds++
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;

        }
    }
    const loadingHours = hours < 10 ? "0" + hours.toString() : hours;
    const loadingMinutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    const loadingSeconds = seconds < 10 ? "0" + seconds.toString() : seconds;

    let displayTimer = document.getElementById('timer').innerText = loadingHours + ":" + loadingMinutes + ":" + loadingSeconds;
}


// window.setInterval(stopWatch, 10)

startStopBtn.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000)
        document.getElementById('startStopBtn').innerHTML =  `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
})

resetBtn.addEventListener('click', function(){
    seconds = 0;
    minutes = 0;
    hours = 0;

    window.clearInterval(timerInterval);
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    document.getElementById('timer').innerText = "00:00:00";
})