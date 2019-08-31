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