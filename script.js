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

function nonMoving() {
//    document.getElementsByClassName("slide-right").style.animationPlayState = "paused";
//    document.getElementById("tea").style.animationPlayState = "paused";
//    document.getElementById("movingTea").style.animationPlayState = "paused";
//    document.getElementById("cuddle").style.animationPlayState = "paused";
//    document.getElementById("movingCuddle").style.animationPlayState = "paused";
}

function movingInformation() {
    
    console.log("Activating");
    document.getElementById("slide-right").style.animationPlayState = "running";
    
    document.getElementById("tea").style.display = "inline-block";
    document.getElementById("movingTea").style.display = "inline-block";
    document.getElementById("tea").style.animationIterationCount = "1";
    document.getElementById("movingTea").style.animationIterationCount = "1";
    
    document.getElementById("cuddle").style.display = "inline-block";
    document.getElementById("movingCuddle").style.display = "inline-block";
    document.getElementById("cuddle").style.animationIterationCount = "1";
    document.getElementById("movingCuddle").style.animationIterationCount = "1";
    
    document.getElementById("shop").style.display = "inline-block";
    document.getElementById("movingShop").style.display = "inline-block";
    document.getElementById("shop").style.animationIterationCount = "1";
    document.getElementById("movingShop").style.animationIterationCount = "1";
    
    document.getElementById("food").style.display = "inline-block";
    document.getElementById("movingFood").style.display = "inline-block";
    document.getElementById("food").style.animationIterationCount = "1";
    document.getElementById("movingFood").style.animationIterationCount = "1";
}

window.addEventListener("load", function(){
  // [1] GET ALL THE HTML ELEMENTS
  var video = document.getElementById("vid-show"),
      canvas = document.getElementById("vid-canvas"),
      take = document.getElementById("vid-take");

  // [2] ASK FOR USER PERMISSION TO ACCESS CAMERA
  // WILL FAIL IF NO CAMERA IS ATTACHED TO COMPUTER
  navigator.mediaDevices.getUserMedia({ video : true })
  .then(function(stream) {
    // [3] SHOW VIDEO STREAM ON VIDEO TAG
    video.srcObject = stream;
    video.play();

    // [4] WHEN WE CLICK ON "TAKE PHOTO" BUTTON
    take.addEventListener("click", function(){
      // Create snapshot from video
      var draw = document.getElementById("canvas");
      draw.width = video.videoWidth;
      draw.height = video.videoHeight;
      var context2D = draw.getContext("2d");
      context2D.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    });
  })
  .catch(function(err) {
    document.getElementById("vid-controls").innerHTML = "Please enable access and attach a camera";
  });
});