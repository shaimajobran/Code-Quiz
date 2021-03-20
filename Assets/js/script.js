
var header = document.getElementById("header");
var intro = document.getElementById("intro");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var finalScore = document.getElementById("finalScore");
var endMessage = document.getElementById("endMessage");
var finalAnswer = document.getElementById("finalAnswer");
var score = document.getElementById("score");


//The array of questions 
var questions = [{
  question: "What is the name of CSS design that calls for fluid and adaptable elements based on the device resolution or size?",
  choice1: "Responsive",
  choice2: "cascading",
  choice3: "evolution",
  choice4: "shifting",
  correctAnswer: "1"
},

 { question: "CSS can be used to arrange or organize images into a ____.",
    choice1: "Gallery",
      choice2: "Table",
        choice3: "Shadow Box",
          choice4: "Boxes",
            correctAnswer: "4"
},

 { question: "What is used primarily to add styling to a web page?",
    choice1: "HTML",
      choice2: "CSS",
        choice3: "Python",
          choice4: "React.js",
            correctAnswer: "2"
},

 {question: "What HTML attribute references an external JavaScript file?",
    choice1: "href",
      choice2: "src",
        choice3: "class",
          choice4: "index",
            correctAnswer: "2"
},


]

//intro.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

// Start Quiz Button
var startBtn = document.getElementById("startBtn");

//  click of "Start Quiz" button
startBtn.addEventListener("click", startGame);


// Timer  Begin
var timeLeft = 30;
var startScore = 0;
var timer = document.getElementById("timer");

timer.textContent = "Time: " + startScore + "s";

// Start Game function
function startGame() {
  quiz.style.display = "block";
  question.style.display = "block";
  header.style.display = "block";
  intro.style.display = "none";
  finalScore.style.display = "none";


  var timeInterval = setInterval(function () {
    timer.textContent = "Time:" + timeLeft + "s";
    timeLeft -= 1;

    if (timeLeft === 0 || questions.length === runningQuestionIndex + 1) {
      resultRender();
      clearInterval(timeInterval);
      timer.textContent = "Time:" + timeLeft + "s";
    }
  }, 1000);

  renderQuestion();
};

// show Questions 
var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function renderQuestion() {
  var q = questions[runningQuestionIndex];
  question.innerHTML = q.question;
  choice1.innerHTML = q.choice1;
  choice2.innerHTML = q.choice2;
  choice3.innerHTML = q.choice3;
  choice4.innerHTML = q.choice4;
};

// Check Answers
function checkAnswer(answer) {
  if (questions[runningQuestionIndex].correctAnswer == answer) {
    answerOutput.textContent = "Correct!"
  }
  else {
    answerOutput.textContent = "Wrong!"
    timeLeft -= 10;
  }
// If it went through all questions, show final score
  if (questions.length === runningQuestionIndex + 1) {
    resultRender(); 
    return;
  }
  runningQuestionIndex++;
  renderQuestion();
};

//Score Quiz
function resultRender() {
  quiz.style.display = "none";
  intro.style.display = "none";
  finalScore.style.display = "block";

  if (timeLeft === 0 || questions.length - 1) {
    finalAnswer.textContent = "Your final score is " + timeLeft + ".";
  }
};
userInformation.addEventListener("click", function () {
    var contactInfo = document.getElementById("contactInfo").value;
  
    localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
  
    loadScores();
  });
