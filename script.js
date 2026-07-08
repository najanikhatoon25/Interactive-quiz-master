// =========================
// Questions Array
// =========================

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: [
      "HTML",
      "JQuery",
      "CSS",
      "XML"
    ],
    answer: 2
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: [
      "Python Script",
      "JQuery",
      "Django",
      "NodeJS"
    ],
    answer: 2
  },
  {
    question: "Which is used for Connect To Database?",
    options: [
      "PHP",
      "HTML",
      "JS",
      "All"
    ],
    answer: 0
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: 1
  }
];

// =========================
// Variables
// =========================

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// =========================
// DOM Elements
// =========================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

// =========================
// Show Screen Function
// =========================

function showScreen(screen) {

  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");

  screen.classList.add("active");

}

// =========================
// Start Quiz
// =========================

startBtn.addEventListener("click", () => {

  currentQuestion = 0;
  score = 0;

  showScreen(quizScreen);

  showQuestion();

});

// =========================
// Next Question
// =========================

nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {

    showQuestion();

  } else {

    showResult();

  }

});

// =========================
// Restart Quiz
// =========================

restartBtn.addEventListener("click", () => {

  showScreen(startScreen);

});

// =========================
// Display Question
// =========================

function showQuestion() {

  nextBtn.style.display = "none";

  selectedOption = null;

  const q = questions[currentQuestion];

  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;

  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {

    const button = document.createElement("button");

    button.className = "option-btn";

    button.textContent = option;

    button.onclick = () => {

      selectOption(button, index);

    };

    optionsEl.appendChild(button);

  });

}

// =========================
// Select Answer
// =========================

function selectOption(button, index) {

  if (selectedOption !== null) return;

  selectedOption = index;

  const q = questions[currentQuestion];

  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn, i) => {

    btn.disabled = true;

    if (i === q.answer) {

      btn.classList.add("correct");

    }

    if (i === index && i !== q.answer) {

      btn.classList.add("incorrect");

    }

    if (i === index) {

      btn.classList.add("selected");

    }

  });

  if (index === q.answer) {

    score++;

  }

  nextBtn.style.display = "inline-block";

}

// =========================
// Show Result
// =========================

function showResult() {

  showScreen(resultScreen);

  scoreEl.textContent = `You scored ${score} out of ${questions.length}!`;

}

// =========================
// Default Screen
// =========================

showScreen(startScreen);