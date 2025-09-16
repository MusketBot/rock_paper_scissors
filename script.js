let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;  // Counter for rounds
const totalRounds = 5;  // Total rounds to play
const choice = ['rock', 'paper', 'scissors'];
const answer = document.querySelector('.answers');  // Where results will be shown
const scoreBoard = document.querySelector('.scoreBoard');  // Where scores will be displayed
const btnParent = document.getElementById('buttonParent');

// Handle button clicks for player choice
btnParent.addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() === 'button' && roundsPlayed < totalRounds) {
        const btnSelection = event.target.innerText.toLowerCase();
        const computerSelection = getComputerChoice();
        
        // Display the choices
        answer.textContent = `Your choice: ${btnSelection}; Computer chooses: ${computerSelection}`;
        
        // Play the round and update the score
        const roundResult = playRound(btnSelection, computerSelection);
        answer.textContent += ` ${roundResult}`;
        
        // Update the score display
        scoreBoard.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
        
        // Increment the rounds played
        roundsPlayed++;
        
        // Check if the game is over
        if (roundsPlayed === totalRounds) {
            setTimeout(() => {
                displayFinalResult();
                disableButtons();
            }, 500); // Wait a bit before displaying the final result
        }
    }
});

// Function to get a random computer choice
function getComputerChoice() {
    let generateNum = Math.floor(Math.random() * 3);
    return choice[generateNum];
}

// Function to play a round
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
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

// Function to display the final result after 5 rounds
function displayFinalResult() {
    if (humanScore > computerScore) {
        answer.textContent = `Game over! You win the game! Final score - You: ${humanScore}, Computer: ${computerScore}`;
    } else if (humanScore < computerScore) {
        answer.textContent = `Game over! You lose the game! Final score - You: ${humanScore}, Computer: ${computerScore}`;
    } else {
        answer.textContent = `Game over! It's a tie! Final score - You: ${humanScore}, Computer: ${computerScore}`;
    }
}

// Function to disable the buttons after the game ends
function disableButtons() {
    const buttons = btnParent.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true;  // Disable each button
    });
}