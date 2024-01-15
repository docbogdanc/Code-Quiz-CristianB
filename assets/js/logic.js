var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var timeEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");
var secondLeft=10;


startButton.addEventListener('click', startQuestions);
function startQuestions(){
// replace the class to hide the start menu and show the question
    startScreen.classList.replace('start','hide');
    questionsEl.classList.replace('hide','show');
    randomQuestion();
    // resetToNext()
    
}


// create a funtion for timer
function timer () {
    var setTimer = setInterval(function() {
        secondLeft --;
        timeEl.textContent = secondLeft;
        // store the counter in local storage
        localStorage.setItem("time", secondLeft);

        if (secondLeft <= 0) {
            secondLeft = 0
            localStorage.setItem("time", secondLeft);
            clearInterval(setTimer);
            finalMessage();
        }
    },1000);
}
timer();


function finalMessage () {
    resetToNext()
    questionsEl.classList.replace('show', 'hide');
    endScreen.classList.replace('hide', 'show');
    submitButton.addEventListener('click', sendInitials)
    finalScore.textContent = score;
}

function sendInitials() {
    var inputData = initials.value;
    localStorage.setItem("initials", inputData);
    endScreen.classList.replace('show', 'hide');
    startScreen.classList.replace('hide', 'start');
}
