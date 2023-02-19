const quizForm = document.querySelector(".quiz-form")
const submitButton = document.querySelector("#submit-answers-btn");
const outputEl = document.querySelector(".output");



const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "45°",
    "Equilateral triangle",
    
  ];

  function calculateScore(){

    const formResults = new FormData(quizForm);
    let score = 0,
      index = 0;
    for (let value of formResults.values()) {
      if (value === correctAnswers[index]) {
        score = score + 1;
      }
      index = index + 1;
    }   

    outputEl.innerText = "Your score is " + score;
  }

  submitButton.addEventListener("click" , calculateScore);