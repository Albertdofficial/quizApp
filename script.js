'use strict';

const quizData = [
  {
    question: "What is Earth's largest continent?",
    a: 'Africa',
    b: 'Europe',
    c: 'Asia',
    d: 'America',
    correct: 'c',
  },
  {
    question: 'What does “www” stand for in a website browser?',
    a: 'World Wide Web',
    b: 'World Wide War',
    c: 'Work with Web',
    d: 'World Widest Web',
    correct: 'a',
  },
  {
    question: 'What is the hottest planet in the solar system??',
    a: 'Mecury',
    b: 'Jupiter',
    c: 'Venus',
    d: 'Mars',
    correct: 'c',
  },
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'Javascript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Teminals Motorboats',
    correct: 'a',
  },
  {
    question: 'What year was Javascript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

const quizHeader = document.querySelector('.quiz-header');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');

let currentQuiz = 0;
let score = 0;
let correctEl = document.createElement('p');

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  //gets each of the objects of the array
  const currentQuizData = quizData[currentQuiz];

  // get the question property in the objects
  questionEl.innerText = currentQuizData.question;

  // get the question property in the questions
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  // removes the checks or selections
  answerEls.forEach(answerEl => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id; // gets the id of the checked element
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      correctEl.textContent = 'Correct✔';
      correctEl.style.color = 'blue';
      quizHeader.prepend(correctEl);
      score++;
    } else {
      correctEl.textContent = 'Wrong X';
      correctEl.style.color = 'red';
      quizHeader.prepend(correctEl);
    }

    currentQuiz++;
  }
});

nextBtn.addEventListener('click', () => {
  if (currentQuiz < quizData.length) {
    correctEl.textContent = '';
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h2>You answered correctly at ${score}/${quizData.length} questions </h2>

    <button class="reload" onclick="location.reload()">Reload</button> `;
  }
});
