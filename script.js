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
    let choice = prompt("what do you want to play? (rock/paper/scissors): ");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    
    
    console.log()
}
console.log(getHumanChoice());