var bgMusic= new Audio("../assets/bgMusic.mp3")
var hoverSfx= new Audio("../assets/hover.mp3")
var clickedSfx= new Audio("../assets/clicked.mp3")

var audioBtnOn= document.getElementById("audio-on")
audioBtnOn.onclick = function() {
    audioBtnOn.onmouseover = function() {
        hoverSfx.play();
        audioBtnOn.style.transitionDuration="0.1s"
    }
    bgMusic.play()
    audioBtnOn.style.textDecoration="underline"
    audioBtnOff.style.textDecoration="none"

    audioBtnOff.onmouseover = function() {
        hoverSfx.play();
        audioBtnOff.style.transitionDuration="0.1s"
    }

    document.getElementById("back").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("back").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-1").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-1").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-2").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-2").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-3").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-3").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-4").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-4").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-5").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-5").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-6").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-6").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-7").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-7").style.transitionDuration="0.1s"
    }

    document.getElementById("chara-8").onmouseover = function() {
        hoverSfx.play();
        document.getElementById("chara-8").style.transitionDuration="0.1s"
    }
}

var audioBtnOff= document.getElementById("audio-off")
audioBtnOff.onclick = function() {
    bgMusic.pause();
    audioBtnOff.style.textDecoration="underline"
    audioBtnOn.style.textDecoration="none"
}

var kirby= new Audio("../assets/kirby.mp3")
document.getElementById("chara-1").onclick = function() {
    kirby.play();
    document.getElementById("chara-1").style.transitionDuration="0.1s"
}

var naruto= new Audio("../assets/naruto.mp3")
document.getElementById("chara-2").onclick = function() {
    naruto.play();
    document.getElementById("chara-2").style.transitionDuration="0.1s"
}

var stitch= new Audio("../assets/stitch.mp3")
document.getElementById("chara-3").onclick = function() {
    stitch.play();
    document.getElementById("chara-3").style.transitionDuration="0.1s"
}

var eduardo= new Audio("../assets/eduardo.mp3")
document.getElementById("chara-4").onclick = function() {
    eduardo.play();
    document.getElementById("chara-4").style.transitionDuration="0.1s"
}

var praiseTheSun= new Audio("../assets/praise-the-sun.mp3")
document.getElementById("chara-5").onclick = function() {
    praiseTheSun.play();
    document.getElementById("chara-5").style.transitionDuration="0.1s"
}

var aang= new Audio("../assets/aang.mp3")
document.getElementById("chara-6").onclick = function() {
    aang.play();
    document.getElementById("chara-6").style.transitionDuration="0.1s"
}

var squidward= new Audio("../assets/squidward.mp3")
document.getElementById("chara-7").onclick = function() {
    squidward.play();
    document.getElementById("chara-7").style.transitionDuration="0.1s"
}

var ironMan= new Audio("../assets/iron-man.mp3")
document.getElementById("chara-8").onclick = function() {
    ironMan.play();
    document.getElementById("chara-8").style.transitionDuration="0.1s"
}