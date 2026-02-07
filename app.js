function getComputerChoice() {
  const random = Math.floor(Math.random() * (2 - 0 + 1));
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "scissors";
  }

  return "paper";
}

function getHumanChoice() {
  const result = prompt();
  return result;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore += 1;
      console.log("You Win");
    } else {
      computerScore += 1;
      console.log("Computer Win");
    }
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("Game Win You");
  } else if (humanScore < computerScore) {
    console.log("Game Win Computer");
  } else {
    console.log("Draw in Game");
  }
}

playGame();
