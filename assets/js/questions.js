var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var unordListEl = document.querySelector("#list");

// create starting point for score
var score = 0;

// create an array of questions as objects
var arrayQuestions = [
{
   title: "Where is ....",
   answer1: "here",
   answer2: "there",
   answer3: "nowhere",
   answer4: "extra"
},
{
    title: "What is ....",
    answer1: "blue",
    answer2: "green",
    answer3: "white",
    answer4: "extra"
},
{
 title : "Why is ....",
 answer1: "cause",
 answer2: "not",
 answer3: "mmmh",
 answer4: "extra"
}
]
var correctChoice = ["there", "green", "not"];


    
// calculate the number of objects/questions from the array
var arrayLength = arrayQuestions.length
// create a function to choose a rondomm object/question from the array
var qIndex = Math.floor(Math.random()*3);
console.log("random number of question is qIndex= "+qIndex);

// select an object/question from the array
var currentQuestion = arrayQuestions[qIndex]
console.log("current question index is "+currentQuestion);
// create an array with the values of the object/question
var currentChoices = Object.values(currentQuestion);
console.log("values are: "+currentChoices);

// create the function to display the question title
function questions () {
    questionTitleEl.textContent = currentChoices[0];
}

// create a function to create new buttons and display the question choices in them
function unListChoices() {
  var newListItem
// create a for loop to return the number of values of the object/question
  for (let i = 1; i < currentChoices.length; i++) {
//   create new element list and add the question choice text 
    newListItem = document.createElement('button');
    newListItem.setAttribute('id', "button"+i)
    unordListEl.appendChild(newListItem);
    newListItem.textContent = i+". "+currentChoices[i];
    console.log("newlistitem is "+newListItem);
  }
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  var button3 = document.getElementById("button3");
  var button4 = document.getElementById("button4");
  
  console.log("newListItem is "+newListItem);
  console.log("correct answer is: "+correctChoice[qIndex]);
//   newListItem.addEventListener('click', function() {
  console.log("the correct answer is "+correctChoice[qIndex]);

  button1.addEventListener("click", function() {

    if (button1.textContent === correctChoice[qIndex]) {
        console.log("the correct answer is "+correctChoice[qIndex]);

        score++;
        console.log("score is: "+score);
        return score
    } else {
        console.log("wrong answer"+ " Score is "+score);
        score --;
        // reduce time remaining with 10 if wrong answer
        if (secondLeft>=10) {
        secondLeft -= 10;} else {
            secondLeft=0;}
        console.log("score is: "+score);
        return score
        }
  })
  
  button2.addEventListener("click", function() {

    console.log("you pressed button2");
    console.log(button2.textContent);
    console.log("2. "+correctChoice[qIndex]);
    if (button2.textContent === ("2. "+correctChoice[qIndex])) {
        console.log("the correct answer is "+correctChoice[qIndex]);
        console.log("your answer is "+button2.textContent);
        score++;
        console.log("score is: "+score);
        return score
       
    } else {
        console.log("wrong answer"+ " Score is "+score);
        score --;
        // reduce time remaining with 10 if wrong answer
        if (secondLeft>=10) {
        secondLeft -= 10;} else {
            secondLeft=0;}
        console.log("score is: "+score);
        return score
        }
  })
  
  button3.addEventListener("click", function() {

    if (button3.textContent === correctChoice[qIndex]) {
        console.log("the correct answer is "+correctChoice[qIndex]);
     
        score++;
        console.log("score is: "+score);
        return score;
    } else {
        console.log("wrong answer"+ " Score is "+score);
        score --;
        // reduce time remaining with 10 if wrong answer
        if (secondLeft>=10) {
        secondLeft -= 10;} else {
            secondLeft=0;}
        console.log("score is: "+score);
        return score;
    }})
  button4.addEventListener("click", function() {  
      if (button4.textContent === correctChoice[qIndex]) {
          console.log("the correct answer is "+correctChoice[qIndex]);
       
          score++;
          console.log("score is: "+score);
          return score;
      } else {
          console.log("wrong answer"+ " Score is "+score);
          score --;
          // reduce time remaining with 10 if wrong answer
          if (secondLeft>=10) {
          secondLeft -= 10;} else {
              secondLeft=0;}
          console.log("score is: "+score);
          return score;
      }})
   }

console.log("score is: "+score);

unListChoices()
