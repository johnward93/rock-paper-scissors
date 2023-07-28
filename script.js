function getComputerChoice() {
    let computerChoiceNum = (Math.floor(Math.random()*1000)) % 3;
    let computerChoiceWord = ""

    if(computerChoiceNum === 0){
        computerChoiceWord = "rock";
    }
    else if(computerChoiceNum === 1){
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
    let result = ``
    if(!(playerSelection == "rock") && !(playerSelection == "paper") && !(playerSelection == "scissors")){
        result = `${playerSelection} is not a valid option`
        return result
    }
    else if(playerSelection == computerSelection){
        result = `It's a tie! You both chose the same option` 
        return result
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        result = `You win! ${playerSelection} beats ${computerSelection}`
        return result
    }
    else {
        result = `You lose! ${computerSelection} beats ${playerSelection}`
        return result
    }
  }

const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));