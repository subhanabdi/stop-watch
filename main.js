var min = 0;
var sec = 0;
var hmsec = 0;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var minsecHeading = document.getElementById("minsec")
var interval,


function timer() {
    msec++
    minsecHeading.innerHTML = minsec;
    if(minsec >= 100){
        sec++
        secHeading.innerHTML =sec
        minsec = 0
    }else if (sec >= 60){
        min++
        minHeading = min
        sec = 0
    }
}
function start() {
    interval = setInterval(timer ,10)    
}
function stop(){
    clearInterval(interval) 
    
}
function reset(){
    min = 00
    sec = 00
    minsec = 00
    minHeading.innerHTML = 00
    secHeading.innerHTML = 00
    minsecHeading.innerHTML = 00
    stop()
}