// creating an array
let min = 0;
let sec = 0;
let timer = false;

function start(){
  
    timer = true;
    stopwatch();
}

function stop(){

    timer = false;
}

function reset(){
    timer = false;
    min = 0;
    sec = 0;

    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
}
function stopwatch(){

    if(timer == true){
        sec +=1;
    }
    if(sec == 60){
        sec = 0;
        min +=1;
    }

    let minstring = min;
    let secstring = sec;

    if(min<10){
        minstring = "0" + min;
    }
    if(sec<10){
        secstring = "0" + sec;
    }

    document.getElementById("min").innerHTML = minstring;
    document.getElementById("sec").innerHTML = secstring;
    setTimeout("stopwatch()",1000);
}