var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var unordListEl = document.querySelector("#list");
var feedback = document.querySelector("#feedback");
var audioCorrrect = document.querySelector("#correctAudio");
var audioWrong = document.querySelector("#incorrectAudio");
// create starting point for score
var score = 0;

var storageScore = localStorage.getItem("count");

// create an array(list) of questions as objects
var arrayQuestions = [
{
   title: "What is the correct way to declare a variable in JavaScript?",
   answer1: "var x",
   answer2: "let x",
   answer3: "const x",
   answer4: "All of the above"
},
{
    title: "Which operator is used to concatenate two strings in JavaScript?",
    answer1: "+",
    answer2: "-",
    answer3: "*",
    answer4: "%"
},
{
 title : "How do you write a single-line comment in JavaScript?",
 answer1: " /This is a comment",
 answer2: "/* This is a comment */",
 answer3: "'This is a comment'",
 answer4: "// This is a comment"
},
{
  title: "What is the output of the following code snippet: console.log(typeof 'Hello World');?",
  answer1: "string",
  answer2: "number",
  answer3: "boolean",
  answer4: "All of the above"
},
{
  title: "Which method is used to remove the last element from an array in JavaScript?",
  answer1: "pop()",
  answer2: "shift()",
  answer3: "push()",
  answer4: "add()"
},
{
  title: "How do you round the number 7.25 to the nearest integer in JavaScript?",
  answer1: "Math.ceil(7.25)",
  answer2: "Math.floor(7.25)",
  answer3: "Math.round(7.25)",
  answer4: "Math,random(7.25)"
},
{
  title: "What is the correct way to write an if statement in JavaScript?",
  answer1: "if (x === 5) {}",
  answer2: " if x === 5 {}",
  answer3: "if x = 5 {}",
  answer4: "if (x) = (5) {}"
},
{
  title: "Which method is used to convert a string to uppercase in JavaScript?",
  answer1: "toUpperCase()",
  answer2: "toLowerCase()",
  answer3: "convertToUpper()",
  answer4: "convertToLower()"
},
{
  title: "What is the output of the following code snippet: console.log(2 + '2');?",
  answer1: "4",
  answer2: "22",
  answer3: "2",
  answer4: "2'2'"
},
{
  title: "What is the result of the following expression: 10 % 3?",
  answer1: "1",
  answer2: "2",
  answer3: "3",
  answer4: "0"
},
]
// create an array with the correct answers
var correctChoice = ["All of the above", "+", "// This is a comment", "string", "pop()","Math.round(7.25)","if (x === 5) {}","toUpperCase()","22","1"];

// calculate how many questions are in total in the list of questions
var arrayLength = arrayQuestions.length

function randomQuestion () {
  // create a function to choose a rondomm object/question from the list of questions
  var qIndex = Math.floor(Math.random()*10);

  // select an question from the array
  var currentQuestion = arrayQuestions[qIndex]
  
  // create an array with the choices (object' values) of the question
  var currentChoices = Object.values(currentQuestion);
  
  // create the function to display the question title
  function questions () {
    questionTitleEl.textContent = currentChoices[0];
  }
  
  // create a function to create new buttons and display the question choices in them
  function unListChoices() {
    var newListItem

    // create a for loop to return the number of values of the object/question
    for (let i = 1; i < currentChoices.length; i++) {
    //   create new element list as buttons and add the question' choice text inside them ; append the buttons to "ul" parent element 
      newListItem = document.createElement('button');
      newListItem.setAttribute('id', "button"+i)
      unordListEl.appendChild(newListItem);
      newListItem.textContent = i+". "+currentChoices[i];
    }

  //   create variable for each button element based on their "id"
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
  
    // create event listener for click on buttons ; score is increasing if correct, time is dicreasing if incorrect
    button1.addEventListener("click", function() {
      localStorage.getItem("time");
      if (secondLeft <=0) {
        finalMessage();
        return
      }
      if (button1.textContent ===("1. "+ correctChoice[qIndex])) {
          score++;
          audioCorrrect.play();
          feedback.classList.replace('hide', 'start');
          feedback.textContent = "Correct";
      } else {
        audioWrong.play();
        feedback.classList.replace('hide', 'start');
        feedback.textContent = "Wrong";
          if (secondLeft>=10) {
          secondLeft -= 10;} else {
              secondLeft=0;}
    }
    // delete current question to prepare for next one
    resetToNext();
    localStorage.setItem("count", score); //send the score to local storage
    randomQuestion(); //start another question
    });  
    
    button2.addEventListener("click", function() {
      if (button2.textContent === ("2. "+correctChoice[qIndex])) {
          score++;
          audioCorrrect.play();
          feedback.classList.replace('hide', 'start');
          feedback.textContent = "Correct";
      } else {
        audioWrong.play();
        feedback.classList.replace('hide', 'start');
        feedback.textContent = "Wrong";
          if (secondLeft>=10) {
          secondLeft -= 10;} else {
              secondLeft=0;}
    }
    resetToNext();
    localStorage.setItem("count", score);
    randomQuestion();
    })
    
    button3.addEventListener("click", function() {
      if (button3.textContent ===("3. "+ correctChoice[qIndex])) {
          score++;
          audioCorrrect.play();
          feedback.classList.replace('hide', 'start');
          feedback.textContent = "Correct";
      } else {
          audioWrong.play();
          feedback.classList.replace('hide', 'start');
          feedback.textContent = "Wrong";
          if (secondLeft>=10) {
          secondLeft -= 10;} else {
              secondLeft=0;}
      };
      resetToNext();
      localStorage.setItem("count", score);
      randomQuestion();
    })
  
    button4.addEventListener("click", function() {  
        if (button4.textContent ===("4. "+ correctChoice[qIndex])) {
            score++;
            audioCorrrect.play();
            feedback.classList.replace('hide', 'start');
            feedback.textContent = "Correct";
        } else {
            audioWrong.play();
            feedback.classList.replace('hide', 'start');
            feedback.textContent = "Wrong";
            if (secondLeft>=10) {
            secondLeft -= 10;} else {
                secondLeft=0;}
        }; 
        resetToNext();
        localStorage.setItem("count", score);        
        randomQuestion();
      })
   
     }
  
// call the functions created above
  questions()
  unListChoices()

}

// remove the previous question to prepare for next one 
function resetToNext() {
    // removing question title
    questionTitleEl.innerHTML="";
    // removing all created buttons
    unordListEl.innerHTML = ""; 
}

