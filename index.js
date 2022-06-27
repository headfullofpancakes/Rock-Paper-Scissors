// Global variables
// Initialise player score to zero
let playerScore = 0;
// Initialise computer score to zero
let computerScore = 0;
// Initialise games played to zero
let gamesPlayed = 0;



//returns random string from array 'rock' 'paper' 'scissors'
function computerPlay (hand) {
    return hand[Math.floor(Math.random()*hand.length)];
}

let hand = ['Rock', 'Paper', 'Scissors'];

//console.log(computerPlay(hand));//test to see that the randomization function works


//function to determine the values of rock, paper, and scissors and theyre related outcomes against one another

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay(hand).toLowerCase();
    playerSelection = playerSelection.toLowerCase();
   
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return `It's a TIE! Two rocks don't make a right!`;

    }else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `You LOSE! Paper beats Rock!`;

    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You WIN! Rock beats Scissors!';

    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `You WIN! Paper beats Rock!`;
    
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `You LOSE! Scissors beats Paper!`;

    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `It's a TIE! Paper Stackin' Time!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `You LOSE! Rock beats Scissors!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You WIN! Scissors beats Paper!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `It's a TIE! Scissors snip Scissors!!!!!!`;
        
    }else {
        return 'Please enter a valid input: Rock, Paper, or Scissors.';
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound('rock', computerPlay(hand)));
    }
}

game();



