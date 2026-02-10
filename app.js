const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return "rock";
  if (random === 1) return "paper";
  return "scissors";
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  function playRound(humanChoice) {
    if (round === 5) return;

    round++;
    const computerChoice = getComputerChoice();

    console.log(`Round ${round}`);
    console.log(`You: ${humanChoice}, Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log("Draw");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      humanScore++;
      console.log("You Win");
    } else {
      computerScore++;
      console.log("Computer Win");
    }

    console.log(`Score: You ${humanScore} : ${computerScore} Computer`);

    if (round === 5) {
      if (humanScore > computerScore) {
        console.log("GAME OVER: YOU WIN");
      } else if (humanScore < computerScore) {
        console.log("GAME OVER: COMPUTER WINS");
      } else {
        console.log("GAME OVER: DRAW");
      }
    }
  }

  rockBtn.addEventListener("click", () => playRound("rock"));
  paperBtn.addEventListener("click", () => playRound("paper"));
  scissorsBtn.addEventListener("click", () => playRound("scissors"));
}

playGame();
