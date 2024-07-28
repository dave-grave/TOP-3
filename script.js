let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("what do you want to play? (rock/paper/scissors): ")
    if (choice.toUpperCase() === "ROCK") {
        return "rock";
    } else if (choice.toUpperCase() === "PAPER") {
        return "paper";
    } else if (choice.toUpperCase() === "SCISSORS") {
        return "scissors";
    } else {
        return "please type a valid input.";
    }
}

function playRound(humanChoice, computerChoice) {
    
    
    console.log()
}
console.log(getHumanChoice());