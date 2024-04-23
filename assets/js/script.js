
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/**
 * Get the constant for all DOM elements and game choice buttons
 */
const optionButtons = document.getElementsByClassName("btn");
const userImage = document.getElementById("user-image");
const computerImage = document.getElementById("computer-image");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors"];
const resultDisplay = document.getElementById('result');
const rockButton = document.getElementById('btn-rock');
const paperButton = document.getElementById('btn-paper');
const scissorsButton = document.getElementById('btn-scissors');

//Disable game buttons when page loads
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  document.getElementsByClassName("btn").disabled = true;
  let timer = document.getElementById("timer-area");
  timer.style.display = "none";
});

let startBtn = document.getElementById("start-btn");
startBtn.onclick = function runGame() {
  document.getElementsByClassName("btn").disabled = false;

  let timer = document.getElementById("timer-area");
  timer.style.display = "block";
  updateCountdown();

  let startBtn = document.getElementById("start-btn-area");
  startBtn.style.display = "none";

}

/*Timer*/

const startingSeconds = 30;
let time = startingSeconds;

const timer = document.getElementById("timer");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const seconds = Math.floor(time);

  timer.innerHTML = `00:${seconds}`;
  time--;
  if (seconds === -1) {
    clearInterval();

  }
}



/**Functions to operate the game and check the winner */
// HTML button elements
rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));

function playRound(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
 
  // Determine the winner and update the resultDisplay with the outcome
  if (playerChoice === computerChoice) {
      resultDisplay.textContent = 'It\'s a draw!';
  } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
      resultDisplay.textContent = 'You win!';
  } else {
      resultDisplay.textContent = 'Computer wins!';
  }
}



function checkAnswers() {

}

function incrementUserScore() {

}

function incrementComputerScore() {

}



