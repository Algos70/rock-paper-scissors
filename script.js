//Choose a random number with math.random() function then 0 => rock, 1 => paper, 2 => scissors
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

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

    //play a game of 5 rounds
    function game() {
        let playerScore = 0;
        let computerScore = 0;

        //5 is the round count
        for(let i = 0; i < 5; i++) {
            let playerChoice = prompt("Please enter your choice");
            let computerChoice = getComputerChoice();

            let gameResult = playRound(playerChoice, computerChoice);

            if (gameResult.includes("win")) {
                playerScore++;
            }
            else if (gameResult.includes("draw")) {
                playerScore++;
                computerScore++;
            } 
            else {
                computerScore++;
            }

            console.log(gameResult);
        }

        if (playerScore > computerScore) {
            console.log(`You won the game! \nFinal score: \nPlayer: ${playerScore} Computer: ${computerScore}`);
        }
        else {
            console.log(`You lose the game! \nFinal score: \nPlayer: ${playerScore} Computer: ${computerScore}`);
        }
    }
