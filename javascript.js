const btns = document.querySelectorAll(".btn");
const scoreBoard = document.querySelector("#scoreboard");
const result = document.querySelector("#result");
const reset = document.querySelector(".reset");

let humanScore = 0;
let computerScore = 0;

Array.from(btns, (btn) => {
  btn.addEventListener("click", (e) => {
    let human = e.currentTarget.dataset.id;
    let computer = getComputerChoice();

    playRound(human, computer);
  });
});

function getComputerChoice() {
  let answer = Math.floor(Math.random() * 3);
  if (answer === 0) {
    return "rock";
  } else if (answer === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getScoreBoard() {
  if (document.documentElement.lang == "ka") {
    scoreBoard.textContent = `შენ ${humanScore} - ${computerScore} კომპიუტერი`;
  } else {
    scoreBoard.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
  }
}

function playRound(humanChoice, computerChoice) {
  let computerChoiceGeo;
  let humanChoiceGeo;

  if (computerChoice === "rock") {
    computerChoiceGeo = "ქვის";
  } else if (computerChoice === "paper") {
    computerChoiceGeo = "ქაღალდის";
  } else if (computerChoice === "scissors") {
    computerChoiceGeo = "მაკრატლის";
  }

  // if (humanChoice === 'rock') {
  //   humanChoiceGeo = 'ქვის';
  // } else if (humanChoice === 'paper') {
  //   humanChoiceGeo = 'ქაღალდის';
  // } else if (humanChoice === 'scissors') {
  //   humanChoiceGeo = 'მაკრატლის';
  // }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore++;
    if (document.documentElement.lang == "ka") {
      result.textContent = `წააგე ${computerChoiceGeo} წინააღმდეგ`;
      result.style.color = "red";
    } else {
      result.textContent = `Lose against - ${computerChoice}`;
      result.style.color = "red";
    }
    getScoreBoard();
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    if (document.documentElement.lang == "ka") {
      result.textContent = `მოიგე ${computerChoiceGeo} წინააღმდეგ`;
      result.style.color = "#0f0";
    } else {
      result.textContent = `Win against - ${computerChoice}`;
      result.style.color = "#0f0";
    }

    getScoreBoard();
  } else if (humanChoice === computerChoice) {
    if (document.documentElement.lang == "ka") {
      result.textContent = "ფრე";
    } else {
      result.textContent = `Tie`;
    }
    result.style.color = "black";
  } else {
    result.textContent = "incorrect value";
  }
}

reset.addEventListener("click", () => {
  if (document.documentElement.lang == "ka") {
    scoreBoard.textContent = "შენ 0 - 0 კომპიუტერი";
  } else {
    scoreBoard.textContent = "You 0 - 0 Computer";
  }

  humanScore = 0;
  computerScore = 0;
  result.textContent = "...";
  result.style.color = "black";
});
