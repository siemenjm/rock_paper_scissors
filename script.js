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

    if (playerSelection === computerSelection) {
        console.log("It's a Tie! " + playerSelection + " ties " + computerSelection + ".");
        
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose... Paper covers Rock.");
        
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win! Rock smashes Scissors!");
        
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win! Paper covers Rock!");
        
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose... Scissors cut paper.");
        
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose... Rock smashes Scissors.");
        
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win! Scissors cut paper!");
        
    }
}
  
// game function that plays 5 round game and keeps score
// while the amount of rounds played is less than or equal to 5, call playRound
// keeps track of winner and loser of each round
// outputs a winner and a loser string, along with the score 

function game() {
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    let roundsRemaining = 5;

    rockBtn.addEventListener('click', function(){playRound('Rock', computerPlay())});
    paperBtn.addEventListener('click', function(){playRound('Paper', computerPlay())});
    scissorsBtn.addEventListener('click', function(){playRound('Scissors', computerPlay())});
}

game();