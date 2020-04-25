var bgMusic= new Audio("assets/bgMusic.mp3")
var hoverSfx= new Audio("assets/hover.mp3")
var clickedSfx= new Audio("assets/clicked.mp3")

var audioBtnOn= document.getElementById("audio-on")
audioBtnOn.onclick = function() {
    bgMusic.play()
    audioBtnOn.style.textDecoration="underline"
    audioBtnOff.style.textDecoration="none"
}

audioBtnOn.onmouseover = function() {
    hoverSfx.play();
    audioBtnOn.style.transitionDuration="0.1s"
}

var audioBtnOff= document.getElementById("audio-off")
audioBtnOff.onclick = function() {
    bgMusic.pause();
    audioBtnOff.style.textDecoration="underline"
    audioBtnOn.style.textDecoration="none"
}

audioBtnOff.onmouseover = function() {
    hoverSfx.play();
    audioBtnOff.style.transitionDuration="0.1s"
}

var start= document.getElementById("btn-start")
start.onclick = function() {
    clickedSfx.play();
}

start.onmouseover = function() {
    hoverSfx.play();
    start.style.transitionDuration="0.1s"
}

var body = document.getElementById("index")
body.onclick= function() {
    document.getElementById("click-anywhere").style.visibility= "hidden";
    document.getElementById("start-game").style.visibility= "visible";
    document.getElementById("btn-audio").style.visibility= "visible";
    document.getElementById("brand").style.visibility= "visible";
}