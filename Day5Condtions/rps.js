// simple code
let userChoice = "rock";
let computerChoice = "scissors";

if (userChoice === computerChoice) {
    console.log("It's a draw!");
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    console.log("You win!");
} else {
    console.log("Computer wins!");
}




 