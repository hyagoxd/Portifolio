const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;
let dx;
let dy;
let score;
let gameInterval;

function initGame() {
    snake = [{ x: 10 * scale, y: 10 * scale }];
    fruit = { x: Math.floor(Math.random() * columns) * scale, y: Math.floor(Math.random() * rows) * scale };
    dx = scale;
    dy = 0;
    score = 0;

    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(update, 150);
}

function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, scale, scale);
    });
}

function drawFruit() {
    ctx.fillStyle = 'red';
    ctx.fillRect(fruit.x, fruit.y, scale, scale);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === fruit.x && head.y === fruit.y) {
        score++;
        fruit = { x: Math.floor(Math.random() * columns) * scale, y: Math.floor(Math.random() * rows) * scale };
    } else {
        snake.pop();
    }
}

function checkCollision() {
    const head = snake[0];

    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    moveSnake();
    
    if (checkCollision()) {
        clearInterval(gameInterval);
        alert('Game Over! Pontuação: ' + score);
        return;
    }

    drawSnake();
    drawFruit();
}

function changeDirection(event) {
    switch(event.key) {
        case 'ArrowUp':
        case 'w':
            if (dy === 0) { dx = 0; dy = -scale; }
            break;
        case 'ArrowDown':
        case 's':
            if (dy === 0) { dx = 0; dy = scale; }
            break;
        case 'ArrowLeft':
        case 'a':
            if (dx === 0) { dx = -scale; dy = 0; }
            break;
        case 'ArrowRight':
        case 'd':
            if (dx === 0) { dx = scale; dy = 0; }
            break;
    }
}

function restartGame() {
    initGame();
}

document.addEventListener('keydown', changeDirection);
document.getElementById('restartButton').addEventListener('click', restartGame);

initGame();
