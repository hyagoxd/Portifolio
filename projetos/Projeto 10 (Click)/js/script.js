let score = 0;

const movingSquare = document.getElementById('moving-square');
const scoreDisplay = document.getElementById('score');
const container = document.getElementById('game-container');

function moveSquare() {
    const containerRect = container.getBoundingClientRect();
    const squareSize = movingSquare.offsetWidth;
    const maxX = containerRect.width - squareSize;
    const maxY = containerRect.height - squareSize;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    movingSquare.style.left = `${randomX}px`;
    movingSquare.style.top = `${randomY}px`;
}

function updateScore() {
    score += 1;
    scoreDisplay.textContent = `Pontuação: ${score}`;
}

movingSquare.addEventListener('click', () => {
    updateScore();
    moveSquare();
});

// Mover o quadrado pela primeira vez
moveSquare();
