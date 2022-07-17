//Choose a random number with math.random() function then 0 => rock, 1 => paper, 2 => scissor
function getComputerChoice() {
    let random = Math.random() * 3;

    if (random === 0) {
        return "rock";
    }
    else if (random === 1) {
        return "paper";
    }
    else {
        return "scissor"
    }
}