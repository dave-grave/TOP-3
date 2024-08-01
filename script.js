const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener("click", () => {
    playRound("rock");
});

btnPaper.addEventListener("click", () => {
    playRound("paper");
});

btnScissors.addEventListener("click", () => {
    playRound("scissors");
});


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


let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    // humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    const results = document.querySelector(".container-results");

    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            results.textContent = `you lose! paper beats rock.`;
            computerScore++;
        } else if (computerChoice === "scissors") {
            results.textContent = `you win! rock beats scissors.`;
            humanScore++;
        } else {
            results.textContent = `tie! rock does not beat rock.`;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            results.textContent = `you lose! scissors beats paper.`;
            computerScore++;
        } else if (computerChoice === "rock") {
            results.textContent = `you win! paper beats rock.`;
            humanScore++;
        } else {
            results.textContent = `tie! paper does not beat paper.`;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            results.textContent = `you lose! rock beats scissors.`;
            computerScore++;
        } else if (computerChoice === "paper") {
            results.textContent = `you win! scissors beats paper.`;
            humanScore++;
        } else {
            results.textContent = `tie! scissors does not beat scissors.`;
        }
    }

    if (humanScore >= 5) {
        results.textContent = `human wins with a score of 5.`
    } else if (computerScore >= 5) {
        results.textContent = `computer wins with a score of 5.`
    }
}