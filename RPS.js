console.log("Welcome to my ultimate Rock, Paper, Scissors game!\n")

const playerSelection = prompt("Please type your move (Rock, Paper, or Scissors)!").toLowerCase()

function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        console.log("Player chooses: " + playerSelection)
        console.log("Computer chooses: " + computerSelection)
    }
    
    if(playerSelection == "rock") {
        if(computerSelection == "scissors") {
            return "You won! Rock beats Scissors!"
        }
        else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock!"
        }
        else {
            return "Tie game! You both chose Rock!"
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "rock") {
            return "You won! Paper beats Rock!"
        }
        else if (computerSelection == "scissors") {
            return "You lose! Scissors beats Paper!"
        }
        else {
            return "Tie game! You both chose Paper!"
        }
    }
    else if(playerSelection == "scissors") {
        if(computerSelection == "paper") {
            return "You won! Scissors beats Paper!"
        }
        else if (computerSelection == "rock") {
            return "You lose! Rock beats Paper!"
        }
        else {
            return "Tie game! You both chose Scissors!"
        }
    }
    else {
        playerSelection = prompt("Incorrect input, please try again! Please type your move (Rock, Paper, or Scissors)!").toLowerCase()
        return playRound(playerSelection, computerSelection)
    }
  }

function getComputerChoice() {
    var result = Math.floor(Math.random() * 3)
    
    if(result == 0) {
        return "rock"
    }
    else if (result == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
    
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
            