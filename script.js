let humanScore = 0;
let computerScore = 0;
const choice = ['rock', 'paper', 'scissors'];

//getting computer choice.
function getComputerChoice() {
  let generateNum = Math.floor(Math.random() * 3);
  return choice[generateNum];
}
function getHumanChoice() {
    let answer = prompt('What is your choice? (rock, paper, or scissors)').toLowerCase();
    while (!choice.includes(answer)) {
      answer = prompt('Invalid choice. Enter: "rock", "paper", "scissors"').toLowerCase();
    } 
    return answer;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `A tie! Both chose ${humanChoice}.`;
    }
  
    if ( 
        (humanChoice === choice[0] && computerChoice === choice[2]) ||
        (humanChoice === choice[2] && computerChoice === choice[1]) ||
        (humanChoice === choice[1] && computerChoice === choice[0])
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}. Your score: ${humanScore}, Computer score: ${computerScore}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}. Your Score: ${humanScore}, Computer score: ${computerScore}`;
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
      const humanSelection = getHumanChoice();
      const computerSelection  = getComputerChoice();
      console.log(playRound(humanSelection, computerSelection));
    }
    if (humanScore > computerScore) {
      return `Game over! You win the game! Final score - You: ${humanScore}, Computer: ${computerScore}`;
    } else if (humanScore< computerScore) {
      return `Game over! You lose the game! Final score - You: ${humanScore}, Computer score: ${computerScore}`;
    } else {
      return `Game over! It's a tie! Final score - You: ${humanScore}, Computer: ${computerScore}`;
    }
}
console.log(playGame());
