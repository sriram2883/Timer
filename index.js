var inter;
function stop(){
    clearInterval(inter);
}
function setTimer(){
    document.querySelector("#hours").innerHTML=document.getElementById("hoursIn").value;
    document.querySelector("#days").innerHTML=document.getElementById("daysIn").value;
    document.querySelector("#mins").innerHTML=document.getElementById("minsIn").value;
    document.querySelector("#secs").innerHTML=document.getElementById("secsIn").value;
}
function start(){   
    inter=setInterval(changeTime,1000);
}
function reset(){
    clearInterval(inter);
    document.querySelector("#days").innerHTML=0;
    document.querySelector("#hours").innerHTML=0;
    document.querySelector("#mins").innerHTML=0;
    document.querySelector("#secs").innerHTML=0;
}

function changeTime(){
    var epochtime=(parseInt(document.querySelector("#days").innerHTML)*60*60*24+parseInt(document.querySelector("#hours").innerHTML)*60*60+parseInt(document.querySelector("#mins").innerHTML)*60+parseInt(document.querySelector("#secs").innerHTML));   
    epochtime=epochtime-1;
    if (epochtime<=0){
    clearInterval(inter);
    reset();
    epochtime=0;
    }
    var days=Math.floor(epochtime/(24*60*60));
    var hours=Math.floor((epochtime%86400)/3600);
    var minu=Math.floor(((epochtime%86400)%3600)/60);
    var secc=(epochtime-(days*86400+hours*3600+minu*60));
    document.querySelector("#days").innerHTML=days;
    document.querySelector("#hours").innerHTML=hours;
    document.querySelector("#mins").innerHTML=minu;
    document.querySelector("#secs").innerHTML=secc;
    console.log(days,hours,minu,secc)
    console.log(epochtime)
 
}