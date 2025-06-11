const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Madrid"],
      answer: "Paris"
    },
    {
      question: "Which language is used for web apps?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
    },
    {
      question: "Who is the father of Physics?",
      options: ["Newton", "Einstein", "Galileo", "Tesla"],
      answer: "Galileo"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => checkAnswer(btn, q.answer);
      optionsEl.appendChild(btn);
    });
  
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(button, correctAnswer) {
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
      if (btn !== button && btn.textContent !== correctAnswer && button.textContent === btn.textContent) {
        btn.classList.add("incorrect");
      }
    });
  
    if (button.textContent === correctAnswer) {
      score++;
    } else {
      button.classList.add("incorrect");
    }
  
    nextBtn.style.display = "block";
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Your score: ${score} out of ${quizData.length}`;
  }
  
  loadQuestion();