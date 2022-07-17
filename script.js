//Choose a random number with math.random() function then 0 => rock, 1 => paper, 2 => scissors
function getComputerChoice() {
    let random = Math.random() * 3;

    if (random === 0) {
        return "rock";
    }
    else if (random === 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

// A game of rock paper scissors, done with if else blocks
function playRound(playerSelection, ComputerSelection) {
    let playerChoice = "" + playerSelection.toLowerCase();

    if (playerChoice === ComputerSelection) {
        return `It's a draw!`;
    }
    else if (playerChoice === "rock" && ComputerSelection === "paper") {
        return `You lose! ${ComputerSelection} beats ${playerChoice}`;
    }
    else if (playerChoice === "rock" && ComputerSelection === "scissors") {
        return `You win! ${playerChoice} beats ${ComputerSelection}`;
    }
    else if (playerChoice === "paper" && ComputerSelection === "rock") {
        return `You win! ${playerChoice} beats ${ComputerSelection}`;
    }
    else if (playerChoice === "paper" && ComputerSelection === "scissors") {
        return `You lose! ${ComputerSelection} beats ${playerChoice}`;
    }
    else if (playerChoice === "scissors" && ComputerSelection === "paper") {
        return `You win! ${playerChoice} beats ${ComputerSelection}`;
    }
    else if (playerChoice === "scissors" && ComputerSelection === "rock") {
        return `You lose! ${ComputerSelection} beats ${playerChoice}`;
    }

}