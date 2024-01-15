var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen")
var timeEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");



startButton.addEventListener('click', startQuestions)
function startQuestions(){
// replace the class to hide the start menu and show the question
    startScreen.classList.replace('start','hide');
    questionsEl.classList.replace('hide','show')
    questions();
}

// create a variable for timer start seconds
var secondLeft=100;
// create a funtion for timer
function timer () {
    var setTimer = setInterval(function() {
        secondLeft --;
        timeEl.textContent = secondLeft;

        if (secondLeft <= 0) {
            secondLeft = 0
            clearInterval(setTimer);
            finalMessage();
        }
    },1000);
}
timer();

function finalMessage () {
    alert("The End!");
}
