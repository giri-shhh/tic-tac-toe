const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn;

const winningComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winnigMessage = document.querySelectorAll('[data-winning-message-text');

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const switchTurns = () => {
  circleTurn = !circleTurn;
};

const checkForWin = (currentClass) => {
  return winningComb.some(comb => {
    return comb.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
};

const setBoardHoverClass = () => {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  board.classList.add(circleTurn ? CIRCLE_CLASS : X_CLASS);
};

const endGame = (draw) => {
  if(draw) {

  } else {
    winnigMessage.innerText = `${circleTurn ? 'O wins!!!' : 'X wins!!!'}`;
  }
  winningMessageElement.classList.add('show');
}

const handleClick = (e) => {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkForWin(currentClass)) {
    endGame(false);
  }
  switchTurns();
  setBoardHoverClass();
};

const startGame = () => {
  circleTurn = false;
  cellElements.forEach((cell) => {
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
};

startGame();
