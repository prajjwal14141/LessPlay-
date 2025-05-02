const board = document.getElementById("board");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function renderBoard() {
  board.innerHTML = "";
  gameBoard.forEach((cell, index) => {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.textContent = cell;
    div.addEventListener("click", () => handleClick(index));
    board.appendChild(div);
  });
}

function handleClick(index) {
  if (gameBoard[index] !== "" || !gameActive) return;
  gameBoard[index] = currentPlayer;
  renderBoard();
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],
  ];

  for (const pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      statusText.textContent = `${gameBoard[a]} wins!`;
      gameActive = false;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
  } else {
    statusText.textContent = `Current Player: ${currentPlayer}`;
  }
}

function restartGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = `Current Player: ${currentPlayer}`;
  renderBoard();
}

renderBoard();
statusText.textContent = `Current Player: ${currentPlayer}`;
