var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");



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
    

var qTitle = arrayQuestions[1].title;
console.log(qTitle);
var qChoice = arrayQuestions[1].answer2;
console.log(qChoice);