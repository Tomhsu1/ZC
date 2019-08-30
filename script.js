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

function hottieReveal() {
    document.getElementById("hottie").style.display = "block";
}