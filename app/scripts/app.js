var startTime = 25*60;
var pomodoroInterval = setInterval(function() {
    startTime = startTime-1;
    
    minutes = parseInt(startTime/60); 
    seconds = parseInt(startTime%60);
    seconds = (seconds < 10) ? '0'+seconds : seconds;
    
    $('.timer').text(minutes  + ':' + seconds);
}, 1000);