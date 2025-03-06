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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  humanChoice = getHumanChoice();  
  humanChoice = humanChoice.toLowerCase();
  
  computerChoice = getComputerChoice();


  if (humanChoice === "rock" && computerChoice === "paper"){
    computerScore ++;
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors");
  } else if (humanChoice === "paper" && computerChoice === "scissors"){
    computerScore++;
    console.log("You lose! Scissors beats Paper");
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    humanScore++;
    console.log("You Win! Paper beats Rock");
  } else if (humanChoice === "rock" && computerChoice === "scissors"){
    humanScore++;
    console.log("You Win! Rock beats Scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper"){
    humanScore++;
    console.log("You Win! Scissors beats Paper");
  } else {
    console.log("incorrect value");
  }   
}

function playGame(){
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (humanScore > computerScore){
    console.log("You win " + humanScore + " - " + computerScore);
  } else {
    console.log("You lose " + humanScore + " - " + computerScore);
  }
}