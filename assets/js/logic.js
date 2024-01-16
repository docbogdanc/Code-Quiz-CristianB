// creating variables for HTML elements 
var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var highscores = document.querySelector("#highscores")
var timeEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");

// setting starting seconds for counter
var secondLeft=50;

// start questions when button clicked
startButton.addEventListener('click', startQuestions);
function startQuestions(){
// replace the class to hide the starting menu and show the questions menu
    startScreen.classList.replace('start','hide');
    questionsEl.classList.replace('hide','show');
    // call function with questions
    randomQuestion();
    // start the timer
    timer();
   
    
}


// create a funtion for timer
function timer () {
    var setTimer = setInterval(function() {
        secondLeft --;
        // display timer
        timeEl.textContent = secondLeft;
        // store the counter in local storage
        localStorage.setItem("time", secondLeft);

        if (secondLeft <= 0) {
            // rest timer
            clearInterval(setTimer);
            // display 0 seconds all time as sometimes go to -1
            secondLeft = 0
            localStorage.setItem("time", secondLeft);

            // call function when timer "0"
            finalMessage();
        }
    },1000);
}


// define the action when timer has stopped 
function finalMessage () {
    // make sure that the time show 0 (sometime it goes to -1)
    secondLeft = 0
    timeEl.textContent = secondLeft;
    // delete the question title and choices
    resetToNext();
    // hide starting menu and question menu and show the endScreen menu
    startScreen.classList.replace('start','hide');
    questionsEl.classList.replace('show', 'hide');
    endScreen.classList.replace('hide', 'show');
    submitButton.addEventListener('click', sendInitials)
    // display the final score
    finalScore.textContent = score;
}

// define the action for sending initials to local storage and open highscore page
function sendInitials() {
    // take input player initials and save in local storage
    var inputData = initials.value;
    localStorage.setItem("initials", inputData);
    // open the page with highscore
    var otherPage = window.open('highscores.html');
    otherPage.onload = scoresOnOtherPage() ;
    // reset the main page to start again the questions
    endScreen.classList.replace('show', 'hide');
    startScreen.classList.replace('hide', 'start');
}
