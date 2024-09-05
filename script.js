function getComputerChoice() {
    let computerChoiceNum = (Math.floor(Math.random() * 1000)) % 3;
    let computerChoiceWord = ""

    if (computerChoiceNum === 0) {
        computerChoiceWord = "rock"
    }
    else if (computerChoiceNum === 1) {
        computerChoiceWord = "paper"
    }
    else {
        computerChoiceWord = "scissors"
    }
    return computerChoiceWord;
}

// console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerScore < 5 && computerScore < 5) {
        if (playerSelection == computerSelection) {
            gameResult.textContent = `It's a tie! You both chose ${playerSelection}`;
        }
        else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
            playerScore++;
            playerDiv.textContent = `Player: ${playerScore}`;
            gameResult.textContent = `You won that one!`;
        }
        else {
            computerScore++;
            computerDiv.textContent = `Computer: ${computerScore}`;
            gameResult.textContent = `You lost that one!`;
        }
    }
    if (playerScore === 5) {
        gameResult.textContent = `Player is the winner`;
        return;
    }
    else if (computerScore === 5){
        gameResult.textContent = `Computer is the winner, cheating bastard`;
        return;
    }
}

let playerScore = 0
let computerScore = 0

const buttonsSelection = document.querySelectorAll("button");
buttonsSelection.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
});

const gameResult = document.querySelector("#game-result");

const playerDiv = document.querySelector("#player-score");
const computerDiv = document.querySelector("#computer-score");
const scoreboard = document.querySelector("#scoreboard")