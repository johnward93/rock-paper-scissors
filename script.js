function getComputerChoice() {
    let computerChoiceNum = (Math.floor(Math.random()*1000)) % 3;
    let computerChoiceWord = ""

    if(computerChoiceNum === 0){
        computerChoiceWord = "rock"
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
        console.log(`${playerSelection} is not a valid option`)
    }
    else if(playerSelection == computerSelection){
        result = `tie` 
        return result
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        result = `player`
        return result
    }
    else {
        result = `computer`
        return result
    }
}

function game(){
    let playerScore = 0
    let computerScore = 0

    while (playerScore < 5 && computerScore < 5){
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors")
        const computerSelection = getComputerChoice()
        let winner = playRound(playerSelection, computerSelection)
        if (winner === "tie"){
            console.log(`It's a tie! You both chose ${playerSelection}`)
            continue
        }
        else if (winner === "player"){
            playerScore++
            console.log(`You won that one! Player: ${playerScore} Computer: ${computerScore}`)
        }
        else if (winner === "computer"){
            computerScore++
            console.log(`You lost that one! Player: ${playerScore} Computer: ${computerScore}`)
        }
    }
    if (playerScore === 5){
        return `Player beat the computer`
    }
    else {
        return `Computer must have cheated, it won`
    }
}

console.log(game())