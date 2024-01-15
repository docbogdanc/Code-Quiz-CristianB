var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var unordListEl = document.querySelector("#list");

// create starting point for score
var Score = 0;

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
var correctChoice = ["there", "green", "not"];


    
// calculate the number of objects/questions from the array
var arrayLength = arrayQuestions.length
// create a function to choose a rondomm object/question from the array
var qIndex = Math.floor(Math.random()*3);
console.log("random number of question is "+qIndex);

// select an object/question from the array
var currentQuestion = arrayQuestions[qIndex]
console.log("current question index is "+currentQuestion);
// create an array with the values of the object/question
var currentChoices = Object.values(currentQuestion);
console.log("values are "+currentChoices);

// create the function to display the question title
function questions () {
    questionTitleEl.textContent = currentChoices[0];
}

// create a function to create new buttons and display the question choices in them
function unListChoices() {
// create a for loop to return the number of values of the object/question
  for (let i = 1; i < currentChoices.length; i++) {
//   create new element list and add the question choice text 
    var newListItem = document.createElement('button');
    unordListEl.appendChild(newListItem);
    newListItem.textContent = i+". "+currentChoices[i];
  }

  newListItem.addEventListener('click', function(event) {
    if (event.target.textContent === correctChoice[qIndex]) {
        console.log("the correct answer is "+correctChoice[qIndex]);
        console.log("your answer is "+event.target.textContent);
        Score++;
    } else {
        Score --;
        // reduce time remaining with 10 if wrong answer
        if (secondLeft>=10) {
        secondLeft -= 10;} else {
            secondLeft=0;}
        }
    }
)

}
unListChoices()


