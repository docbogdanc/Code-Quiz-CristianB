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

// create the function to display the title and choices 
function questions () {
//     // unordListEl.textContent = "Hello";
//     //  choicesEl.innerText = qChoice;
    }
    


// // create a function to create an unordered list inside de "choices" div
var qIndex = 0;

// function unListChoices() {
//     var currentQuestion = arrayQuestions[qIndex]
//     console.log(currentQuestion);
//     var currentChoices = Object.values(currentQuestion);
//     console.log("values are "+currentChoices);
//     // create a variable for list elements
//     var ulListElem = unordListEl.querySelectorAll('li');
// // create a for loop to return the number of keys of the object
//     for (var i = 1 ; i < currentChoices.length ; i++ ) {
//     // create text for every choice
//       var choiceEl = document.querySelector("#choice" + i);
//       console.log(choiceEl);
//       choice1_El.innerHTML = "Hey "+currentChoices[i];
//       console.log(currentChoices[i]);
//       console.log("i = "+i);
//     };
    
// }
// unListChoices();

var currentQuestion = arrayQuestions[qIndex]
console.log(currentQuestion);
var currentChoices = Object.values(currentQuestion);
console.log("values are "+currentChoices);

function unListChoices() {
// create a for loop to return the number of keys of the object
for (let i = 1; i < currentChoices.length; i++) {
//   create new element list and add choice text 
  var newListItem = document.createElement('li');
  unordListEl.appendChild(newListItem);
  newListItem.textContent = currentChoices[i];
}

}

unListChoices()
// var qTitle = arrayQuestions[qIndex].title;
// console.log(qTitle);
// var qChoice = arrayQuestions[qIndex].answer2;
// console.log(qChoice);