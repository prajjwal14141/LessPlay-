const words = ["apple", "brain", "crane", "grape", "trace", "flame"];
const answer = words[Math.floor(Math.random() * words.length)];
let guessCount = 0;

function createRow(guess, result) {
  for (let i = 0; i < guess.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    if (result[i] === "correct") tile.classList.add("correct");
    else if (result[i] === "present") tile.classList.add("present");
    else tile.classList.add("absent");

    tile.textContent = guess[i];
    document.getElementById("board").appendChild(tile);
  }
}

function checkGuess() {
  const input = document.getElementById("guess-input");
  const guess = input.value.toLowerCase();
  const message = document.getElementById("message");

  if (guess.length !== 5 || !/^[a-z]+$/.test(guess)) {
    message.textContent = "Please enter a 5-letter word.";
    return;
  }

  let result = [];

  for (let i = 0; i < 5; i++) {
    if (guess[i] === answer[i]) result.push("correct");
    else if (answer.includes(guess[i])) result.push("present");
    else result.push("absent");
  }

  createRow(guess, result);
  guessCount++;

  if (guess === answer) {
    message.textContent = "🎉 Correct! You win!";
    document.getElementById("guess-input").disabled = true;
  } else if (guessCount >= 6) {
    message.textContent = "❌ Out of tries! Answer: " + answer;
    document.getElementById("guess-input").disabled = true;
  } else {
    input.value = "";
    message.textContent = "";
  }
}
