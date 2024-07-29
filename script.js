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

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
    
        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log(`you lose! paper beats rock.`);
                computerScore++;
            } else if (computerChoice === "scissors") {
                console.log(`you win! rock beats scissors.`);
                humanScore++;
            } else {
                console.log(`tie! rock does not beat rock.`)
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                console.log(`you lose! scissors beats paper.`);
                computerScore++;
            } else if (computerChoice === "rock") {
                console.log(`you win! paper beats rock.`);
                humanScore++;
            } else {
                console.log(`tie! paper does not beat paper.`)
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log(`you lose! rock beats scissors.`);
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log(`you win! scissors beats paper.`);
                humanScore++;
            } else {
                console.log(`tie! scissors does not beat scissors.`)
            }
        } else {
            console.log('please type a valid choice.')
        }
    }

    for (i = 0; i < 5; i++) {
        playRound();    
    }

    let winner = (computerScore > humanScore) ? "computer" : "human";
    console.log(`${winner} wins (or maybe ties). computer: ${computerScore} human: ${humanScore}`);
}

playGame();