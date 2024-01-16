var highscores = document.querySelector("#highscores")
var clearScores = document.querySelector("#clear")

// bring the highscores list from storage (is stringified!)
var storedHighScoreString = localStorage.getItem("array");
// if the highscores list is empty , create an empty score in it
if (storedHighScoreString===null) {
    storedHighScoreString = JSON.stringify([{}]);
    console.log(storedHighScoreString);
}
// transform the highscores list from stringified into an array of objects
var storedHighScoredObj = JSON.parse(storedHighScoreString);


// bring data from storage with last user initias and score
var newInitials = localStorage.getItem("initials");
var newScore = localStorage.getItem("count");
// remove the last user initals and score from local storage to prevent creating duplicate score if webpage is refresh by the user
localStorage.removeItem("initials");
localStorage.removeItem("count")
// create a new score object with the new initials and score
newData = {key1: newInitials , key2: newScore}
// update the highscores list that was in local storage with the new score 
storedHighScoredObj.push(newData);

// store in the local storage the updated list of highscores
var arrayHighscoresString = JSON.stringify(storedHighScoredObj);
localStorage.setItem("array", arrayHighscoresString)
// create elements with the stored Highstored value

// create new lists element ("li") with all the scores and initials
for (var i=0 ; i<storedHighScoredObj.length ; i++) {
    var populateInitials = storedHighScoredObj[i].key1;
    var populateScore = storedHighScoredObj[i].key2;
    if (populateInitials === undefined || populateScore === undefined ) {continue;}
    if (populateInitials === null || populateScore === null ) {continue;}
    var newRow = document.createElement("li");
    newRow.innerHTML = populateInitials + " - " + populateScore;
    highscores.appendChild(newRow);

}

// clear highscores list and clear the local storage if clicked "reset"
clearScores.addEventListener('click' , reset) ;
function reset (){
    highscores.textContent = "";
    localStorage.clear();
};
