var timeEl = document.querySelector("#time");
var secondLeft=100;
console.log(timeEl);

// create funtion for timer
function timer () {
    var setTimer = setInterval(function() {
        secondLeft --;
        timeEl.textContent = secondLeft;

        if (secondLeft ===0) {
            clearInterval(setTimer);
            finalMessage();
        }
    },1000);
}

function finalMessage () {
    alert("The End!");
}


timer();