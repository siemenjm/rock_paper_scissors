// computerPlay function should randomly return either "Rock", "Paper", or "Scissors" for computer's play
    // should have no input, just return one of three strings
    // produce random number in a specified range
    // compare random number to number range assigned to strings
    // return appropriate string

function computerPlay() {
    let totalChoices = 3;
    let random = Math.random() * totalChoices;

    if (random < 1) {
        return "Rock";
    } else if (random < 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
  
// playRound function should play single round
// will take in two params, playerSelection and computerSelection
// will return string that declares the winner of the round like: "You Lose! Paper beats Rock"
// user input can be case insensitive
    
function playRound(playerSelection, computerSelection) {
    let playerCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

    if (playerCapitalized === computerCapitalized) {
        console.log("It's a Tie! " + playerCapitalized + " ties " + computerCapitalized + ".");
        return "Tie";
    } else if (playerCapitalized === "Rock" && computerCapitalized === "Paper") {
        console.log("You Lose... Paper covers Rock.");
        return "Lose";
    } else if (playerCapitalized === "Rock" && computerCapitalized === "Scissors") {
        console.log("You Win! Rock smashes Scissors!");
        return "Win";
    } else if (playerCapitalized === "Paper" && computerCapitalized === "Rock") {
        console.log("You Win! Paper covers Rock!");
        return "Win";
    } else if (playerCapitalized === "Paper" && computerCapitalized === "Scissors") {
        console.log("You Lose... Scissors cut paper.");
        return "Lose";
    } else if (playerCapitalized === "Scissors" && computerCapitalized === "Rock") {
        console.log("You Lose... Rock smashes Scissors.");
        return "Lose";
    } else if (playerCapitalized === "Scissors" && computerCapitalized === "Paper") {
        console.log("You Win! Scissors cut paper!");
        return "Win";
    }
}
  
// game function that plays 5 round game and keeps score
// while the amount of rounds played is less than or equal to 5, call playRound
// keeps track of winner and loser of each round
// outputs a winner and a loser string, along with the score 
  
function game() {
    let playerWins = 0;
    let playerLosses = 0;
    let ties = 0;

    let roundsPlayed = 0;
    while (roundsPlayed < 5) {
        let playerChoice = prompt("Choose Rock, Paper, or Scissors.", "You didn't choose!")
        let computerChoice = computerPlay();

        let outcome = playRound(playerChoice, computerChoice);

        if (outcome === "Win") {
        playerWins++;
        } else if (outcome === "Lose") {
        playerLosses++;
        } else {
        ties++;
        }

        roundsPlayed++;
    }
  
    if (playerWins > playerLosses) {
        console.log("You Won with a score of " + playerWins + " wins, " + playerLosses + " losses, and " + ties + " ties!");
    } else if (playerWins < playerLosses) {
        console.log("You Lost with a score of " + playerWins + " wins, " + playerLosses + " losses, and " + ties + " ties...");
    } else {
        console.log("You Tied with a score of " + playerWins + " wins, " + playerLosses + " losses, and " + ties + " ties.");
    }

}