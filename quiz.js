const questions = [
    {
      question: "1. What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "2. Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
        question: "3. Which is larget animal in the world?",
        options: ["Shark", "Blie whale", "Elephant", "Giraffe"],
        correctAnswer: "Blie whale"
    }
  ];

  const quizContainer = document.getElementById("quiz-container");
  const questionsContainer = document.getElementById("questions");
  const submitButton = document.getElementById("submit-btn");

  submitButton.addEventListener("click", () => {
    let score = 0;
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      if (selectedOption && selectedOption.value === question.correctAnswer) {
        score++;
      }
    });
    displayResults(score);
  });

  function displayResults(score) {
    const resultMessage = `You scored ${score} out of ${questions.length}`;
    alert(resultMessage);
  }

  function renderQuestions() {
    questionsContainer.innerHTML = "";
    questions.forEach((question, index) => {
      const questionElement = document.createElement("div");
      questionElement.innerHTML = `
        <p>${question.question}</p>
        <form id="question${index}-form">
          ${question.options.map(option => `
            <input type="radio" name="question${index}" value="${option}">
            <label>${option}</label><br>
          `).join('')}
        </form>
      `;
      questionsContainer.appendChild(questionElement);
    });
  }

  renderQuestions();