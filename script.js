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
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();

    let humanChoiceNumber;
    let computerChoiceNumber;

    if (humanChoice === "rock") {
        humanChoiceNumber = 0;
    } else if (humanChoice === "paper") {
        humanChoiceNumber = 1;
    } else if (humanChoice === "scissors") {
        humanChoiceNumber = 2;
    }
    console.log(`you played ${humanChoice}, and computer played ${computerChoice}.`);
}

playRound();