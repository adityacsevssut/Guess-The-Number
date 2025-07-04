let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let message = document.getElementById("message");
let attemptsDisplay = document.getElementById("attempts");
let restartBtn = document.getElementById("restartBtn");
guessBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  attempts++;
  attemptsDisplay.textContent = attempts;
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = " Please enter a number between 1 and 100.";
    return;
  }
  if (guess === randomNumber) {
    message.textContent = ` Correct! You guessed it in ${attempts} attempts.`;
    guessBtn.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = " Too low! Try again.";
  } else {
    message.textContent = " Too high! Try again.";
  }

  guessInput.value = "";
});

restartBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.value = "";
  message.textContent = "";
  attemptsDisplay.textContent = "0";
  guessBtn.disabled = false;
});
