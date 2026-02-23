const icons = [
    'fa-car', 'fa-bicycle', 'fa-bus', 'fa-train', 'fa-plane', 'fa-ship',
    'fa-motorcycle', 'fa-tachometer-alt', 'fa-suitcase', 'fa-cogs',
    'fa-bolt', 'fa-cloud'
];

const container = document.querySelector('.game-container');
const restartButton = document.getElementById('restart-button');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

// Cria as cartas e embaralha
function createCards() {
    container.innerHTML = '';
    const shuffledIcons = shuffle([...icons, ...icons]); // Duplicar os ícones para ter 24 cartas

    shuffledIcons.forEach(icon => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.icon = icon;
        card.innerHTML = `<i class="fas ${icon}"></i>`;
        card.addEventListener('click', flipCard);
        container.appendChild(card);
    });
}

// Embaralha um array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.icon === secondCard.dataset.icon;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Adiciona evento de reinício
restartButton.addEventListener('click', createCards);

// Inicializa o jogo
createCards();
