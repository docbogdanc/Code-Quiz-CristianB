var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var unordListEl = document.querySelector("#list");


   // create an array of questions as objects
   var arrayQuestions = [
   {
      title: "Where is ....",
      answer1: "here",
      answer2: "there",
      answer3: "nowhere"
   },
   {
       title: "What is ....",
       answer1: "blue",
       answer2: "green",
       answer3: "white" 
   },
   {
    title : "Why is ....",
    answer1: "cause",
    answer2: "not",
    answer3: "mmmh" 
   }
]

// create the function to display the title and choices 
function questions () {
    questionTitleEl.textContent = qTitle;
    choicesEl.textContent = qChoice;
    }
    

var listEl = document.createElement("p");

listEl.textContent = "hey";
choicesEl.appendChild(listEl);


// create a function to create an unordered list inside de "choices" div
var qIndex = 0;

function unListChoices() {
    var currentQuestion = arrayQuestions[qIndex]
    console.log(currentQuestion);
// create a for loop to return the number of keys of the object
    for (var i = 1 ; i < Object.keys(currentQuestion).length ; i++ ) {
    // create unordered list with choices
    var listEl = document.createElement("p");

    listEl.textContent = "hey";
    choicesEl.appendChild(listEl);
    console.log("i = "+i);
    };
}
unListChoices();



var qTitle = arrayQuestions[qIndex].title;
console.log(qTitle);
var qChoice = arrayQuestions[qIndex].answer2;
console.log(qChoice);