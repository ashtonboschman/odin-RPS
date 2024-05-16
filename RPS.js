console.log("Welcome to my ultimate Rock, Paper, Scissors game!\n"); 



function playRound(humanChoice, computerChoice) {
    if(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        console.log("Player chooses: " + humanChoice);
        console.log("Computer chooses: " + computerChoice);
    
        if(humanChoice == "rock") {
            if(computerChoice == "scissors") {
                console.log("You won! Rock beats Scissors!");
                humanScore++;
            }
            else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock!");
                computerScore++;
            }
            else {
                console.log("Tie game! You both chose Rock!");
            }
        }
        else if(humanChoice == "paper") {
            if(computerChoice == "rock") {
                console.log("You won! Paper beats Rock!");
                humanScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper!");
                computerScore++;
            }
            else {
                console.log("Tie game! You both chose Paper!");
            }
        }
        else if(humanChoice == "scissors") {
            if(computerChoice == "paper") {
                console.log("You won! Scissors beats Paper!");
                humanScore++;
            }
            else if (computerChoice == "rock") {
                console.log("You lose! Rock beats Paper!");
                computerScore++;
            }
            else {
                console.log("Tie game! You both chose Scissors!");
            }
        }
    }
    else {
        humanChoice = prompt("Incorrect input, please try again! Please type your move (Rock, Paper, or Scissors)!").toLowerCase();
        playRound(humanChoice, computerChoice);
    }
  }

function getComputerChoice() {
    var result = Math.floor(Math.random() * 3);
    
    if(result == 0) {
        return "rock";
    }
    else if (result == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
    
}

function getHumanChoice() {
    var result = prompt("Please type your move (Rock, Paper, or Scissors)!").toLowerCase();
    return result;
}

function playGame() {
    
    
    
    for(let i = 0; i < 5; i++) {
        console.log("Game " + (i + 1) + ":")
        var humanChoice = getHumanChoice();
        var computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Score - Human: " + humanScore + " Computer: " + computerScore);
    }
    
}

var humanScore = 0;
var computerScore = 0;
playGame();


