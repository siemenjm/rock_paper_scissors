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
        outcomeMessage.textContent = 'It\'s a Tie! ' + playerSelection + ' ties ' + computerSelection + '!';
        playerTies++;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose... Paper covers Rock.");
        outcomeMessage.textContent = 'You Lose... Paper covers Rock...';
        playerLosses++;   
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win! Rock smashes Scissors!");
        outcomeMessage.textContent = 'You Win! Rock smashes Scissors!';
        playerWins++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win! Paper covers Rock!");
        outcomeMessage.textContent = 'You Win! Rock smashes Scissors!';
        playerWins++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose... Scissors cut paper.");
        outcomeMessage.textContent = 'You Lose... Paper covers Rock...';
        playerLosses++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose... Rock smashes Scissors.");
        outcomeMessage.textContent = 'You Lose... Paper covers Rock...';
        playerLosses++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win! Scissors cut paper!");
        outcomeMessage.textContent = 'You Win! Rock smashes Scissors!';
        playerWins++;
    }

    changePicture(playerImage, playerSelection);
    changePicture(computerImage, computerSelection);

    roundsRemaining--;
}

// changePicture changes the picture, duh, based on the player/computer choice when a button is clicked

function changePicture(element, selection) {
    if (selection === 'Rock') {
        element.src = 'pics/rock.jpg';
    } else if (selection === 'Paper') {
        element.src = 'pics/paper.jpg';
    } else {
        element.src = 'pics/scissors.jpg';
    }
}
  
// game function that plays 5 round game and keeps score
// while the amount of rounds played is less than or equal to 5, call playRound
// keeps track of winner and loser of each round
// outputs a winner and a loser string, along with the score 

function game() {
    rockBtn.addEventListener('click', function(){playRound('Rock', computerPlay())});
    paperBtn.addEventListener('click', function(){playRound('Paper', computerPlay())});
    scissorsBtn.addEventListener('click', function(){playRound('Scissors', computerPlay())});
}

const outcomeMessage = document.querySelector('#outcome-message');
const playerImage = document.querySelector('#your-img');
const computerImage = document.querySelector('#computer-img');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let roundsRemaining = 5;
let playerWins = 0;
let playerLosses = 0;
let playerTies = 0;

game();