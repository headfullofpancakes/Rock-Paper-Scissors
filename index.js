//returns random string from array 'rock' 'paper' 'scissors'
function computerPlay (hand) {
    return hand[Math.floor(Math.random()*hand.length)];
}

let hand = ['Rock', 'Paper', 'Scissors'];

console.log(computerPlay(hand));//test to see that the randomization function works

//function playRound (playerSelection, computerSelection) {
  //  computerSelection = computerPlay().toLowerCase();
    //playerSelection = playerSelection.toLowerCase();
//}