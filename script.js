// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const maxScoreElement = document.getElementById('max-score');
const resultMessageElement = document.getElementById('result-message');
const answersContainer = document.getElementById('answers-container');
const progressElement = document.getElementById('progress');

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Which of these is not a programming language?",
        answers: ["Python", "JavaScript", "HTML", "C++"],
        correctAnswer: "HTML"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Gd", "Go"],
        correctAnswer: "Au"
    },
];
// Quiz State variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz)
restartButton.addEventListener("click", restartQuiz)

function startQuiz(){
    console.log("Quiz Started");
}

function restartQuiz(){
    console.log("Quiz Re-Started.")
}