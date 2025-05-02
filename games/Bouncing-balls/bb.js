const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 3;
let dy = -3;
let ballRadius = 10;

let paddleHeight = 10;
let paddleWidth = 80;
let paddleX = (canvas.width - paddleWidth) / 2;

let rightPressed = false;
let leftPressed = false;

let score = 0;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#00e676";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#29b6f6";
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
  document.getElementById("score").textContent = `Score: ${score}`;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  drawScore();

  // Ball movement
  x += dx;
  y += dy;

  // Wall bounce
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    // Paddle collision
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
      score++;
      dx *= 1.05; // increase speed
      dy *= 1.05;
    } else {
      alert("GAME OVER\nScore: " + score);
      document.location.reload();
    }
  }

  // Paddle move
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 6;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 6;
  }

  requestAnimationFrame(draw);
}

draw();
