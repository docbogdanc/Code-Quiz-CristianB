var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var unordListEl = document.querySelector("#list");
var feedback = document.querySelector("#feedback");
// create starting point for score
var score = 0;

var storageScore = localStorage.getItem("count");

// create an array(list) of questions as objects
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
// create an array with the correct answers
var correctChoice = [arrayQuestions[0].answer2, "green", "not", "not"];

// calculate how many questions are in total in the list of questions
var arrayLength = arrayQuestions.length

function randomQuestion () {
  // create a function to choose a rondomm object/question from the list of questions
  var qIndex = Math.floor(Math.random()*3);

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
          feedback.classList.replace('hide', 'start');
          feedback.textContent = "Correct";
      } else {
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
          feedback.classList.replace('hide', 'start');
          feedback.textContent = "Correct";
      } else {
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
          feedback.classList.replace('hide', 'start');
          feedback.textContent = "Correct";
      } else {
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
            feedback.classList.replace('hide', 'start');
            feedback.textContent = "Correct";
        } else {
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

