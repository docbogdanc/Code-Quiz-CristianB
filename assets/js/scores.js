var highscores = document.querySelector("#highscores")
var clearScores = document.querySelector("#clear")

// get data from storage to create a local array of objects
var storedHighScoreString = localStorage.getItem("array");
// if there is no data in local storage, create and empty array of objects
if (storedHighScoreString===null) {
    storedHighScoreString = JSON.stringify([{}]);
    console.log(storedHighScoreString);
}

var storedHighScoredObj = JSON.parse(storedHighScoreString);



var newInitials = localStorage.getItem("initials");
var newScore = localStorage.getItem("count");



// create a new object with new initials and score
newData = {key1: newInitials , key2: newScore}
// add the new object to the array of scores
storedHighScoredObj.push(newData);

// store the array with scores locally
var arrayHighscoresString = JSON.stringify(storedHighScoredObj);
localStorage.setItem("array", arrayHighscoresString)
// create elements with the stored Highstored value

// create new lists element with the new score and initials
for (var i=0 ; i<storedHighScoredObj.length ; i++) {
    var populateInitials = storedHighScoredObj[i].key1;
    var populateScore = storedHighScoredObj[i].key2;
    if (populateInitials === undefined || populateScore === undefined ) {continue;}
    var newRow = document.createElement("li");
    newRow.innerHTML = populateInitials + " - " + populateScore;
    highscores.appendChild(newRow);

}

clearScores.addEventListener('click' , reset) ;
function reset (){
    highscores.textContent = "";
    localStorage.clear();
};
