var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var unordListEl = document.querySelector("#list");
var choice1_El = document.querySelector("#choice1");
var choice2_El = document.querySelector("#choice2");
var choice3_El = document.querySelector("#choice3");
var choice4_El = document.querySelector("#choice4");


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

// create the function to display the question title
function questions () {
    questionTitleEl.textContent = currentChoices[0];
//     //  choicesEl.innerText = qChoice;
    }
    
// calculate the number of questions from the array
var arrayLength = arrayQuestions.length
// create a function to create an unordered list inside de "choices" div
var qIndex = Math.floor(Math.random()*3);
console.log(qIndex);

// select a question (object) from the array
var currentQuestion = arrayQuestions[qIndex]
console.log(currentQuestion);
// create an array with the values of the object (question)
var currentChoices = Object.values(currentQuestion);
console.log("values are "+currentChoices);

// create a function to create question choices and display them
var qIndex = 0;
function unListChoices() {
// create a for loop to return the number of keys of the object
for (let i = 1; i < currentChoices.length; i++) {
//   create new element list and add choice text 
  var newListItem = document.createElement('button');
  unordListEl.appendChild(newListItem);
  newListItem.textContent = i+". "+currentChoices[i];
}
}
unListChoices()
