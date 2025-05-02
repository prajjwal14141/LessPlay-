let score = 0;
let timeLeft = 30;
let currentMole = null;
let timerId = null;
let moleTimer = null;

function randomHole() {
  return document.getElementById("hole" + Math.floor(Math.random() * 9));
}

function showMole() {
  if (currentMole) currentMole.innerHTML = "";
  const hole = randomHole();
  const mole = document.createElement("div");
  mole.classList.add("mole");
  mole.addEventListener("click", () => {
    score++;
    document.getElementById("score").textContent = score;
    mole.remove();
  });
  hole.appendChild(mole);
  currentMole = hole;
}

function startGame() {
  score = 0;
  timeLeft = 30;
  document.getElementById("score").textContent = score;
  document.getElementById("time").textContent = timeLeft;

  if (currentMole) currentMole.innerHTML = "";

  clearInterval(timerId);
  clearInterval(moleTimer);

  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      clearInterval(moleTimer);
      alert("⏰ Time's up! Your score: " + score);
    }
  }, 1000);

  moleTimer = setInterval(showMole, 700);
}
