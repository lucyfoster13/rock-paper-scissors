//Disable game buttons when page loads
document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");
  document.getElementsByClassName("btn").disabled = true;
  let timer = document.getElementById("timer-area");
  timer.style.display = "none";
          });



function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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
    clearInterval(timer);

}
}

document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
      button.addEventListener("click", function() {
          if (this.getAttribute("data-type") === "startGame") {
              runGame();
          } else {
              let gameType = this.getAttribute("data-type");
              runGame(gameType);
          }
      });
  }

  document.getElementById("answer-box").addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          checkAnswer();
      }

  })
  runGame("addition");


});

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

function runGame() {
  document.getElementsByClassName("btn").disabled = false;
  updateCountdown();
}

function checkAnswers() {

}

function incrementUserScore() {

}

function incrementComputerScore() {
  
}


