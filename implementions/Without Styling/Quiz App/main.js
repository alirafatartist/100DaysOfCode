const quizContainer = document.getElementById("quizContainer");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

const get = () => {
  fetch("./qa.json")
    .then((res) => res.json())
    .then((data) => {
      questions = data.questionDataBase;
      showQuestion();
    })
    .catch((error) => console.log(error));
};

const showQuestion = () => {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  Object.keys(currentQuestion)
    .filter((key) => key.startsWith("option"))
    .forEach((optionKey) => {
      const button = document.createElement("button");
      button.innerText = currentQuestion[optionKey];
      button.classList.add("answer");
      button.addEventListener("click", () => selectAnswer(button, optionKey));
      answerButtonsElement.appendChild(button);
    });
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
};

const selectAnswer = (button, selectedOption) => {
  const currentQuestion = questions[currentQuestionIndex];
  const correct = currentQuestion.ans === selectedOption;

  if (correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
  }

  Array.from(answerButtonsElement.children).forEach((btn) => {
    btn.disabled = true;
    if (currentQuestion.ans === btn.innerText) {
      btn.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
};

const nextQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

const showScore = () => {
  resetState();
  questionElement.innerText = `Your score: ${score} out of ${questions.length}`;
  scoreElement.innerText = `Your score: ${score} out of ${questions.length}`;
  scoreElement.style.display = "block";
  nextButton.innerText = "Restart";
  nextButton.style.display = "block";
  nextButton.addEventListener("click", startQuiz);
};

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.style.display = "none";
  nextButton.innerText = "Next";
  nextButton.removeEventListener("click", startQuiz);
  showQuestion();
};

// Initialize quiz
document.addEventListener("DOMContentLoaded", get);
