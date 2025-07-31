let humanScore = 0;
let computerScore = 0;
const choice = ['rock', 'paper', 'scissors'];

//getting computer choice.
function getComputerChoice() {
    let generateNum = Math.floor(Math.random() * 3);
    return choice[generateNum];
}
console.log(getComputerChoice());