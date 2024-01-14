var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen")
var timeEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");


startButton.addEventListener('click', startQuestions)
function startQuestions(){
// replace the class to hide the start menu
    startScreen.classList.replace('start','hide');
}

// create a variable for timer seconds
var secondLeft=100;

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