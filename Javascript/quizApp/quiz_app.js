const lang_select = document.getElementById("lang_select");
const quiz = document.getElementById("quiz");
const question_text = document.getElementById("question");
const a_answer = document.getElementById("a_answer");
const b_answer = document.getElementById("b_answer");
const c_answer = document.getElementById("c_answer");
const d_answer = document.getElementById("d_answer");
const submit = document.getElementById("submit");
const esp = document.getElementById("esp");
const eng = document.getElementById("eng");

let quizData = [];
let question_num = 0;
let score = 0;
let lang = "";

hideQuiz();

function hideQuiz() {
  quiz.style.display = "none";
}

esp.addEventListener("click", () => {
  startQuizEsp();
});

function startQuizEsp() {
  quiz.style.display = "block";
  lang_select.style.display = "none";
  lang = "esp";
  submit.innerText = "Siguiente";
  loadQuiz();
}

eng.addEventListener("click", () => {
  startQuizEng();
});

function startQuizEng() {
  console.log("here");
  quiz.style.display = "block";
  lang_select.style.display = "none";
  lang = "eng";
  submit.innerText = "Next";
  loadQuiz();
}

//Load a question from the quizData.
function loadQuiz() {
  clearAnswer();
  if (lang === "esp") {
    //Declare the questions in Spanish to be used for the quiz.
    quizData = [
      {
        question: "¿Cuando es la independenzia de Costa Rica?",
        a: "1821",
        b: "1835",
        c: "1937",
        d: "1940",
        answer: "a",
      },
      {
        question: "¿Cual es la capital de Hungria?",
        a: "Viena",
        b: "Minsk",
        c: "Bucarest",
        d: "Budapest",
        answer: "d",
      },
      {
        question: "¿Cual es la moneda de Japon?",
        a: "Dollar",
        b: "Yen",
        c: "Renminbi",
        d: "won",
        answer: "b",
      },
      {
        question: "¿Cual es la población del mundo?",
        a: "7.9 Billones",
        b: "8.0 Billones",
        c: "7.5 Billones",
        d: "7.8 Billones",
        answer: "d",
      },
      {
        question: "¿Por ranking demográfico, cual país es el número uno?",
        a: "India",
        b: "Estados Unidos",
        c: "Indonesia",
        d: "China",
        answer: "d",
      },
      {
        question: "¿Cuantos países usan el dólar estadounidense?",
        a: "7",
        b: "4",
        c: "8",
        d: "1",
        answer: "c",
      },
      {
        question: "¿Cual es la capital de la UE?",
        a: "Bruselas",
        b: "Viena",
        c: "Roma",
        d: "Berlin",
        answer: "a",
      },
      {
        question: "¿Cual es el río más largo del mundo?",
        a: "Nilo",
        b: "St.Lawrance",
        c: "Amazonas",
        d: "De la Plata",
        answer: "c",
      },
      {
        question: "¿Cual es la catarata más alta del mundo?",
        a: "Catarata Yosemite",
        b: "Catarata Tugela",
        c: "Catarata del Angel",
        d: "Catarata Pu'uka'oka",
        answer: "c",
      },
      {
        question: "¿Cual es el lago mas grande del mundo?",
        a: "Lago Superior",
        b: "Mar Caspio",
        c: "Lago Victoria",
        d: " Lago Hurón",
        answer: "b",
      },
    ];
  } else if (lang === "eng") {
    //Declare the questions in English to be used for the quiz.
    quizData = [
      {
        question: "When was the independence of Costa Rica?",
        a: "1821",
        b: "1835",
        c: "1937",
        d: "1940",
        answer: "a",
      },
      {
        question: "Which is the capital of Hungary?",
        a: "Vienna",
        b: "Minsk",
        c: "Bucharest",
        d: "Budapest",
        answer: "d",
      },
      {
        question: "Which is the currency of Japan?",
        a: "Dollar",
        b: "Yen",
        c: "Renminbi",
        d: "won",
        answer: "b",
      },
      {
        question: "What is the population of the world?",
        a: "7.9 Billion",
        b: "8.0 Billion",
        c: "7.5 Billion",
        d: "7.8 Billion",
        answer: "d",
      },
      {
        question: "By demographic ranking, which country is number one?",
        a: "India",
        b: "US",
        c: "Indonesia",
        d: "China",
        answer: "d",
      },
      {
        question: "How many countries use the US dollar?",
        a: "7",
        b: "4",
        c: "8",
        d: "1",
        answer: "c",
      },
      {
        question: "Which is the capital of the EU?",
        a: "Brussels",
        b: "Vienna",
        c: "Rome",
        d: "Berlin",
        answer: "a",
      },
      {
        question: "Which is the longest river in the world?",
        a: "Nile",
        b: "St.Lawrance",
        c: "Amazon",
        d: "De la Plata",
        answer: "c",
      },
      {
        question: "Which is the tallest waterfall in the world?",
        a: "Yosemite Waterfall",
        b: "Tugela Waterfall",
        c: "Angel Waterfall",
        d: "Pu'uka'oka Waterfall",
        answer: "c",
      },
      {
        question: "Which is the biggest lake in the world?",
        a: "Lake Superior",
        b: "Caspian Sea",
        c: "Lake Victoria",
        d: "Lake Huron",
        answer: "b",
      },
    ];
  } else {
  }
  //Load the question.
  const currentQuestionNum = quizData[question_num];
  question_text.innerText = currentQuestionNum.question;
  //Load the possible answers.
  a_answer.innerText = currentQuestionNum.a;
  b_answer.innerText = currentQuestionNum.b;
  c_answer.innerText = currentQuestionNum.c;
  d_answer.innerText = currentQuestionNum.d;
}

//Submit answer and load new question.
submit.addEventListener("click", () => {
  const answer = getAnswers();
  if (answer) {
    if (answer === quizData[question_num].answer) {
      score++;
    }
    question_num++;
    //Load next question.
    if (question_num < quizData.length) {
      loadQuiz();
    } else {
      //Show results of the quiz.
      if ((score / quizData.length) * 100 > 80) {
        if (lang === "esp") {
          quiz.innerHTML = `<h2>Has completado la prueba.</h2>
            <h3>Su puntuaje final es de ${score} de un posible ${quizData.length}</h3>
            <h3>Exelente!</h3>`;
        } else {
          quiz.innerHTML = `<h2>You have completed the quiz.</h2>
            <h3>Your score is ${score} out of a possible ${quizData.length}</h3>
            <h3>Excellent!</h3>`;
        }
      } else if ((score / quizData.length) * 100 > 65) {
        if (lang === "esp") {
          quiz.innerHTML = `<h2>Has completado la prueba.</h2>
            <h3>Su puntuaje final es de ${score} de un posible ${quizData.length}</h3>
            <h3>Buen Trabajo!</h3>`;
        } else {
          quiz.innerHTML = `<h2>You have completed the quiz.</h2>
            <h3>Your score is ${score} out of a possible ${quizData.length}</h3>
            <h3>Good Job!</h3>`;
        }
      } else if ((score / quizData.length) * 100 > 49) {
        if (lang === "esp") {
          quiz.innerHTML = `<h2>Has completado la prueba.</h2>
            <h3>Su puntuaje final es de ${score} de un posible ${quizData.length}</h3>
            <h3>Puedes hacerlo mejor!</h3>`;
        } else {
          quiz.innerHTML = `<h2>You have completed the quiz.</h2>
            <h3>Your score is ${score} out of a possible ${quizData.length}</h3>
            <h3>You can do better!</h3>`;
        }
      } else {
        if (lang === "esp") {
          quiz.innerHTML = `<h2>Has completado la prueba.</h2>
            <h3>Su puntuaje final es de ${score} de un posible ${quizData.length}</h3>
            <h3>Fallaste!</h3>`;
        } else {
          quiz.innerHTML = `<h2>You have completed the quiz.</h2>
            <h3>Your score is ${score} out of a possible ${quizData.length}</h3>
            <h3>You Failed!</h3>`;
        }
      }
    }
  } else {
    if (lang === "esp") {
      alert("Por favor seleccione una opción.");
    } else {
      alert("Please select an answer.");
    }
  }
});

function getAnswers() {
  const answers = document.querySelectorAll(".answer");
  let option = undefined;
  //To check which option was checked by the user.
  answers.forEach((answers) => {
    if (answers.checked) {
      option = answers.id;
    }
  });
  return option;
}

function clearAnswer() {
  //To unselect all of the options.
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answers) => {
    answers.checked = false;
  });
}
