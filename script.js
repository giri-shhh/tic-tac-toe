const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
let circleTurn
const cellElements = document.querySelectorAll('[data-cell]');

const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass)
}

const handleClick = (e) => {
  console.log('Clicked');
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  placeMark(cell, currentClass);
};

cellElements.forEach((cell) => {
  cell.addEventListener('click', handleClick, { once: true });
});
