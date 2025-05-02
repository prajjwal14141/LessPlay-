const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

document.addEventListener("keydown", startGame);

function startGame() {
  if (!started) {
    level = 0;
    gamePattern = [];
    nextSequence();
    started = true;
    document.getElementById("level-title").textContent = "Level " + level;
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById("level-title").textContent = "Level " + level;
  
  const randomColor = buttonColors[Math.floor(Math.random() * 4)];
  gamePattern.push(randomColor);

  // Show sequence to the player with delay
  let delay = 0;
  gamePattern.forEach((color, index) => {
    setTimeout(() => {
      animatePress(color);
      playSound(color);
    }, delay);
    delay += 1000; // 1 second delay between each color in the sequence
  });
}

function playSound(color) {
  const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${buttonColors.indexOf(color)+1}.mp3`);
  audio.play();
}

function animatePress(color) {
  const button = document.getElementById(color);
  button.classList.add("pressed");
  setTimeout(() => button.classList.remove("pressed"), 200);
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });
});

function checkAnswer(currentIndex) {
  if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
    playSound("wrong");
    document.body.style.backgroundColor = "red";
    setTimeout(() => document.body.style.backgroundColor = "#111", 300);
    startOver();
  }
}

function startOver() {
  started = false;
  gamePattern = [];
  level = 0;
}

// Add "wrong" sound in the playSound function or provide the correct URL:
function playSound(color) {
  let sound;
  if (color === "wrong") {
    sound = new Audio("https://www.soundjay.com/button/beep-07.wav"); // Sample wrong sound
  } else {
    sound = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${buttonColors.indexOf(color)+1}.mp3`);
  }
  sound.play();
}
