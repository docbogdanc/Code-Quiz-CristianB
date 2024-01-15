var startButton = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen")
var timeEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");
var secondLeft=10;


startButton.addEventListener('click', startQuestions)
function startQuestions(){
// replace the class to hide the start menu and show the question
    startScreen.classList.replace('start','hide');
    questionsEl.classList.replace('hide','show')
    randomQuestion()
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
    alert("You finished with the score: "+score)
    startScreen.classList.replace('hide', 'start');
    
}
