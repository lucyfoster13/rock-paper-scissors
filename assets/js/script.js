// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
/**
 * Get the constant for all DOM elements and game choice buttons
 */

const resultDisplay = document.getElementById('result');
const rockButton = document.getElementById('btn-rock');
const paperButton = document.getElementById('btn-paper');
const scissorsButton = document.getElementById('btn-scissors');
let count = 30;
//Disable game buttons and hide timer when page loads
document.addEventListener('DOMContentLoaded', function () {
  disableBtns();
  let timer = document.getElementById('timer-area');
  timer.style.display = 'none';
});

//Hide start button and show timer when game starts
let startBtn = document.getElementById('start-btn-area');
startBtn.onclick = function runGame() {
  enableBtns();
  let timer = document.getElementById('timer-area');
  timer.style.display = 'block';
  startTimer();
  startBtn.style.display = 'none';
};

function startTimer() {

  timer = setInterval(function () {
    document.getElementById('timer').innerHTML = `${count}`;
    count--;

    if (count === -1) {
      concludeGame();
    }
  }, 1000);
}

rockButton.addEventListener('click', () => playRound('rock'));

paperButton.addEventListener('click', () => playRound('paper'));

scissorsButton.addEventListener('click', () => playRound('scissors'));

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

function playRound(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];

  let computerChoice = choices[Math.floor(Math.random() * choices.length)];

  if (playerChoice === 'rock') {

    document.getElementById('user-image').src = 'assets/images/rock.webp';
  } else if (playerChoice === 'paper') {

    document.getElementById('user-image').src = 'assets/images/paper.webp';
  } else if (playerChoice === 'scissors') {


    document.getElementById('user-image').src = 'assets/images/scissors.webp';
  }

  if (computerChoice === 'rock') {

    document.getElementById('computer-image').src = 'assets/images/rock.webp';
  } else if (computerChoice === 'paper') {

    document.getElementById('computer-image').src = 'assets/images/paper.webp';
  } else if (computerChoice === 'scissors') {

    document.getElementById('computer-image').src =
      'assets/images/scissors.webp';
  }

  if (playerChoice === computerChoice) {
    resultDisplay.textContent = "It's a draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultDisplay.textContent = 'You win!';

    playerScore++;
  } else {
    resultDisplay.textContent = 'Gary wins!';

    computerScore++;
  }
  /* Update the scoreboard after each round */
  playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
  computerScoreDisplay.textContent = `Gary's Score: ${computerScore}`;
}

function concludeGame() {
  let timer = document.getElementById('timer-area');
  timer.style.display = 'none';
  let finalResult = '';

  if (playerScore > computerScore) {
    finalResult = 'Congratulations, you won the game!';
  } else if (playerScore < computerScore) {
    finalResult = 'Game over, Gary wins!';
  } else {
    finalResult = 'The game ends in a draw!';
  }
  resultDisplay.textContent = finalResult;
}

function disableBtns() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

function enableBtns() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

const gameConclusion = document.createElement('div');

gameConclusion.setAttribute('id', 'game-conclusion');

let finalMessage = '';

if (playerScore > computerScore) {
  finalMessage = 'Congratulations, you won the game!';
} else if (playerScore < computerScore) {
  finalMessage = 'Game over, the computer wins!';
} else {
  finalMessage = 'The game ends in a draw!';
}

gameConclusion.innerHTML = `
<h2>Game Over</h2>
<p>${finalMessage}</p>
<p>Final Score - You: ${playerScore} | Gary: ${computerScore}</p>`;