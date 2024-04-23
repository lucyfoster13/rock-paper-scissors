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

const buttons = document.getElementsByClassName("btn");
const userImage = document.getElementById("user-image");
const computererImage = document.getElementById("computer-image");
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors"];

/**Functions to operate the game and check the winner */



function checkAnswers() {

}

function incrementUserScore() {

}

function incrementComputerScore() {

}