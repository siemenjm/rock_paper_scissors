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
        outcomeMessage.textContent = 'It\'s a Tie! ' + playerSelection + ' ties ' + computerSelection + '!';
        playerTies++;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        outcomeMessage.textContent = 'You Lose... Paper covers Rock...';
        playerLosses++;   
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        outcomeMessage.textContent = 'You Win! Rock smashes Scissors!';
        playerWins++;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        outcomeMessage.textContent = 'You Win! Paper covers Rock!';
        playerWins++;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        outcomeMessage.textContent = 'You Lose... Scissors cut Paper...';
        playerLosses++;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        outcomeMessage.textContent = 'You Lose... Rock smashes Scissors...';
        playerLosses++;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        outcomeMessage.textContent = 'You Win! Scissors cut Paper!';
        playerWins++;
    }

    if (roundsRemaining > 0) {
        changePicture(playerImage, playerSelection);
        changePicture(computerImage, computerSelection);

        changeRecord(playerWins, playerLosses, playerTies);
    
        roundsRemaining--;
        roundsLeft.textContent = roundsRemaining;
    }

    if (roundsRemaining <= 0) {
        if (playerWins > playerLosses) {
            outcomeMessage.textContent = 'You Win!!!';
        } else if (playerWins < playerLosses) {
            outcomeMessage.textContent = 'You Lose...';
        } else {
            outcomeMessage.textContent = 'It\'s a Tie.';
        }

        faceoffMessage.textContent = 'Game Over!';
    }
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

// changeRecord updates the scoreboard

function changeRecord(wins, losses, ties) {
    yourWins.textContent = wins;
    yourLosses.textContent = losses;
    yourTies.textContent = ties;

    computerWins.textContent = losses;
    computerLosses.textContent = wins;
    computerTies.textContent = ties;
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

const roundsLeft = document.querySelector('#rounds-number');
const yourWins = document.querySelector('#your-wins');
const yourLosses = document.querySelector('#your-losses');
const yourTies = document.querySelector('#your-ties');
const computerWins = document.querySelector('#computer-wins');
const computerLosses = document.querySelector('#computer-losses');
const computerTies = document.querySelector('#computer-ties');
const outcomeMessage = document.querySelector('#outcome-message');
const faceoffMessage = document.querySelector('#faceoff-message');
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