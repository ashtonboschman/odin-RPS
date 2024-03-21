console.log("Welcome to my ultimate Rock, Paper, Scissors game!")
console.log("Please type your move (Rock, Paper, or Scissors)!")

const playerSelection = "Rock";

function playRound(playerSelection, computerSelection) {
    console.log("Player chooses: " + playerSelection)
    console.log("Computer chooses: " + computerSelection)
    if(playerSelection == "Rock") {
        if(computerSelection == "Scissors") {
            return "You won! Rock beats Scissors!"
        }
        else if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock!"
        }
        else {
            return "Tie game! You both chose Rock!"
        }
    }
    else if(playerSelection == "Paper") {
        if(computerSelection == "Rock") {
            return "You won! Paper beats Rock!"
        }
        else if (computerSelection == "Scissors") {
            return "You lose! Scissors beats Paper!"
        }
        else {
            return "Tie game! You both chose Paper!"
        }
    }
    else if(playerSelection == "Scissors") {
        if(computerSelection == "Paper") {
            return "You won! Scissors beats Paper!"
        }
        else if (computerSelection == "Rock") {
            return "You lose! Rock beats Paper!"
        }
        else {
            return "Tie game! You both chose Scissors!"
        }
    }
    else {
        return "Incorrect input, please try again!"
    }
  }

function getComputerChoice() {
    return "Scissors"
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
            