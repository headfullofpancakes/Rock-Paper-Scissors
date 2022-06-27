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
        computerScore++;
        return `You LOSE! Paper beats Rock!`;

    }else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You WIN! Rock beats Scissors!';

    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `You WIN! Paper beats Rock!`;
    
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return `You LOSE! Scissors beats Paper!`;

    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return `It's a TIE! Paper Stackin' Time!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return `You LOSE! Rock beats Scissors!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You WIN! Scissors beats Paper!`;

    }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return `It's a TIE! Scissors snip Scissors!!!!!!`;
        
    }else {
        return 'Please enter a valid input: Rock, Paper, or Scissors.';
    }
}


function game() {

    let humanChoice = prompt(`Choose your weapon! Rock, Paper, or Scissors`)
    for (let i = 0; i < 5; i++) {
        console.log(playRound(humanChoice, computerPlay(hand)), playerScore, computerScore);
    }

    if (computerScore > playerScore) {
        console.log('The Computer Wins!');

    }else if (computerScore < playerScore) {
        console.log('You win this time, Human.');

    }else {
        let enterValidInput = prompt(`Choose a valid weapon! Rock, Paper, or Scissors`);

        for (let i = 0; i < 5; i++) {
            console.log(playRound(enterValidInput, computerPlay(hand)), playerScore, computerScore);
        } if (computerScore > playerScore) {
        console.log('The Computer Wins!');

    }else if (computerScore < playerScore) {
        console.log('You win this time, Human.');
    }

}
}

game();



