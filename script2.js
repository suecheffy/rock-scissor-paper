function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log(randomNumber);

  let result;
  switch (randomNumber) {
    case 1:
      result = "Rock";
      break;
    case 2:
      result = "Scissors";
      break;
    case 3:
      result = "Paper";
      break;
    default:
      throw new Error("unexpected random number");
  }
  return result;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let result;
  if (playerSelection === computerSelection) {
    result = "You are tied";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "You won!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You won!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You won!";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "You lost!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You lost!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "You lost!";
  }

  return result;
}

function game() {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Rock? Scissors? Paper?", "Rock");
  console.log(playRound(playerSelection, computerSelection));

  computerSelection = getComputerChoice();
  playerSelection = prompt();
  console.log(playRound(playerSelection, computerSelection));
  computerSelection = getComputerChoice();
  playerSelection = prompt();
  console.log(playRound(playerSelection, computerSelection));

  computerSelection = getComputerChoice();
  playerSelection = prompt();
  console.log(playRound(playerSelection, computerSelection));

  computerSelection = getComputerChoice();
  playerSelection = prompt();
  console.log(playRound(playerSelection, computerSelection));
}

game();

// possibleChoices.forEach((possibleChoice) =>
//  possibleChoice.addEventListener("click", (e) => {
//    userChoice = e.target.id;
//    userChoiceDisplay.innerHTML = userChoice;
//    const computerChoice = GetComputerChoice();
//  })
//);
