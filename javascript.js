let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let answer = Math.floor(Math.random() * 3);
  if (answer === 0){
    return "rock";
  } else if (answer === 1){
    return "paper";
  } else {
    return "scissors";
  }
} 

function getHumanChoice(){
  let humanChoice = prompt("Enter your answer", "");
  return humanChoice;
}

function getScoreBoard(){
  console.log("ScoreBoard: " + humanScore + "-" + computerScore);
}

function playRound(humanChoice, computerChoice){
  if (humanChoice === "rock" && computerChoice === "paper"){
    computerScore ++;
    console.log("You lose! Paper beats Rock");
    getScoreBoard();
    playGame();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors");
    getScoreBoard();
    playGame();
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    console.log("You lose! Scissors beats Paper");
    getScoreBoard();
    playGame();
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    console.log("You Win! Paper beats Rock");
    getScoreBoard();
    playGame();
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    console.log("You Win! Rock beats Scissors");
    getScoreBoard();
    playGame();
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    console.log("You Win! Scissors beats Paper");
    getScoreBoard();
    playGame();
  } else if(humanChoice === computerChoice){
    console.log("Try again");
    playGame();
  }else {
    console.log("incorrect value");
  }   
}

function playGame(){
  let human;
  let computer;
  if(computerScore !== 3 && humanScore !== 3){  //(a || b) == (!a && !b)
    human = getHumanChoice().toLowerCase();
    computer = getComputerChoice();
    playRound(human,computer);
  }else{
    if (humanScore > computerScore){
      console.log("You win " + humanScore + " - " + computerScore);
    } else {
      console.log("You lose " + humanScore + " - " + computerScore);
    }
  }
}