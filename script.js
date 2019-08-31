var numOfClicks = 0;

function fImageReveal() {
    numOfClicks++;
    if (numOfClicks === 1) {
        document.getElementById("fImage").style.display = "inline-block";
    } else if (numOfClicks === 2) {
        document.getElementById("sImage").style.display = "inline-block";
    } else {
        document.getElementById("tImage").style.display = "inline-block";
    }
    
}

//function hottieReveal() {
//    document.getElementById("hottie").style.display = "block";
//}

function movingInformation() {
    document.getElementById("tea").style.display = "inline-block";
    document.getElementById("movingTea").style.display = "inline-block";
    document.getElementById("tea").style.animationPlayState = "running";
    document.getElementById("movingTea").style.animationPlayState = "running";
    document.getElementById("tea").style.animationIterationCount = "1";
    document.getElementById("movingTea").style.animationIterationCount = "1";
    
    document.getElementById("cuddle").style.display = "inline-block";
    document.getElementById("movingCuddle").style.display = "inline-block";
    document.getElementById("cuddle").style.animationPlayState = "running";
    document.getElementById("movingCuddle").style.animationPlayState = "running";
    document.getElementById("cuddle").style.animationIterationCount = "1";
    document.getElementById("movingCuddle").style.animationIterationCount = "1";
}

// Grab elements, create settings, etc.
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

/* Legacy code below: getUserMedia 
else if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia({ video: true }, function(stream) {
        video.src = stream;
        video.play();
    }, errBack);
} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia({ video: true }, function(stream){
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
    }, errBack);
} else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
    navigator.mozGetUserMedia({ video: true }, function(stream){
        video.srcObject = stream;
        video.play();
    }, errBack);
}
*/

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});