import { Game } from './Game.js';

const game = new Game();

const startButton = document.getElementById('start-button');


startButton.addEventListener('click', () => {
  if (game.isPaused) {
    game.start();
  } else {
    game.stop();
  }
});

// const GRID_WIDTH = 10;
// const GRID_HEIGHT = 20;

// // extra line to be frozen added to the grid cells
// const GRID_CELLS = (GRID_WIDTH * GRID_HEIGHT) + GRID_WIDTH;

// // tetramiones (tetris shapes)
// const lShapes = [
//   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, 2],
//   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 2],
//   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2],
//   [GRID_WIDTH, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1, GRID_WIDTH * 2 + 2]
// ];

// const zShapes = [
//   [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
//   [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1],
//   [0, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1],
//   [GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2, GRID_WIDTH * 2 + 1]
// ];

// const tShapes = [
//   [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2],
//   [1, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
//   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH * 2 + 1],
//   [1, GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1]
// ];

// const oShapes = [
//   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
//   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
//   [0, 1, GRID_WIDTH, GRID_WIDTH + 1],
//   [0, 1, GRID_WIDTH, GRID_WIDTH + 1]
// ];

// const iShapes = [
//   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
//   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3],
//   [1, GRID_WIDTH + 1, GRID_WIDTH * 2 + 1, GRID_WIDTH * 3 + 1],
//   [GRID_WIDTH, GRID_WIDTH + 1, GRID_WIDTH + 2, GRID_WIDTH + 3]
// ];


// const gridContainer = document.getElementById('grid-container');
// generateBoard(gridContainer);
// generatePreviewGrid();

// let score = 0;
// const scoreDisplay = document.getElementById('score');
// let gridCells = Array.from(document.querySelectorAll('#grid-container div'));

// let nextPieceRandomIndex = 0;

// const shapes = [lShapes, zShapes, tShapes, oShapes, iShapes];
// const colors = ['orange', 'red', 'purple', 'green', 'blue'];

// let currentPosition = 4;
// let currentRotation = 0;

// // randomly select a shape in the current rotation
// let randomIndex = Math.floor(Math.random() * shapes.length);

// let currentShape = shapes[randomIndex][currentRotation];

// function drawShape() {
//   currentShape.forEach(index => {
//     gridCells[currentPosition + index].classList.add('tetramino');
//     gridCells[currentPosition + index].style.backgroundColor = colors[randomIndex];
//   });
// }

// function undrawShape() {
//   currentShape.forEach(index => {
//     gridCells[currentPosition + index].classList.remove('tetramino');
//     gridCells[currentPosition + index].style.backgroundColor = '';
//   });
// }

// // make the pieces move down every second
// let timerId;

// // assign functions to keycodes
// function control(e) {
//   if (e.keyCode === 37) {
//     moveLeft();
//   } else if (e.keyCode === 38) {
//     rotatePiece();
//   } else if (e.keyCode === 39) {
//     moveRight();
//   } else if (e.keyCode === 40) {
//     moveDown();
//   }
// }

// document.addEventListener('keyup', control);

// function moveDown() {
//   undrawShape();
//   currentPosition += GRID_WIDTH;
//   drawShape();
//   freezePiece();
// }

// // freeze piece at the bottom of board
// function freezePiece() {
//   const isNextLineFrozen = currentShape.some(index => gridCells[currentPosition + index + GRID_WIDTH].classList.contains('taken'));

//   if (isNextLineFrozen) {
//     currentShape.forEach(index => gridCells[currentPosition + index].classList.add('taken'));

//     // get a new randomly selected piece
//     randomIndex = Math.floor(Math.random() * shapes.length);
//     nextPieceRandomIndex = randomIndex;
//     currentShape = shapes[randomIndex][currentRotation];
//     currentPosition = 4;
//     drawShape();
//     previewNextShape();
//     updateScore();
//     gameOver();
//   }
// }

// // move pieces left unless at edge or blocked
// function moveLeft() {
//   undrawShape();

//   const isAtLeftEdge = currentShape.some(index => (currentPosition + index) % GRID_WIDTH === 0);

//   const isLeftCellBlocked = currentShape.some(index => isTaken(gridCells[currentPosition + index - 1]));

//   if (!isAtLeftEdge && !isLeftCellBlocked) currentPosition -= 1;

//   drawShape();
// }

// function isTaken(cell) {
//   return cell.classList.contains('taken');
// }

// // move pieces right unless at edge or blocked
// function moveRight() {
//   undrawShape();

//   const isAtRightEdge = currentShape.some(index => (currentPosition + index) % GRID_WIDTH === GRID_WIDTH - 1);

//   const isRightCellBlocked = currentShape.some(index => isTaken(gridCells[currentPosition + index + 1]));

//   if (!isAtRightEdge && !isRightCellBlocked) currentPosition += 1;

//   drawShape();
// }

// function rotatePiece() {
//   undrawShape();

//   currentRotation++;
//   if (currentRotation === currentShape.length) {
//     currentRotation = 0;
//   }

//   currentShape = shapes[randomIndex][currentRotation]
//   drawShape();
// }

// // preview next piece
// const previewGridCells = document.querySelectorAll('#piece-preview div');
// const previewWidth = 4;
// let previewIndex = 0;

// // array of pieces without rotations
// const nextPieces = [
//   [1, previewWidth + 1, previewWidth * 2 + 1, 2], // L shape
//   [0, previewWidth, previewWidth + 1, previewWidth * 2 + 1], // Z shape
//   [1, previewWidth, previewWidth + 1, previewWidth + 2], // T shape
//   [0, 1, previewWidth, previewWidth + 1], // O shape
//   [1, previewWidth + 1, previewWidth * 2 + 1, previewWidth * 3 + 1] // I shape 
// ];

// function previewNextShape() {
//   // remove any trace of the previous piece
//   previewGridCells.forEach(cell => {
//     cell.classList.remove('tetramino');
//     cell.style.backgroundColor = '';
//   });
//   nextPieces[nextPieceRandomIndex].forEach(index => {
//     previewGridCells[previewIndex + index].classList.add('tetramino');
//     previewGridCells[previewIndex + index].style.backgroundColor = colors[nextPieceRandomIndex];
//   });
// }

// // add functionality to play/pause button



// // score functionality
// function updateScore() {
//   for (i = 0; i < 199; i += GRID_WIDTH) {
//     const row = [i, i + 1, i + 2, i + 3, i + 4, i + 5, i + 6, i + 7, i + 8, i + 9];
//     if (row.every(index => gridCells[index].classList.contains('taken'))) {
//       score += 10;
//       scoreDisplay.innerText = score;
//       row.forEach(index => {
//         gridCells[index].classList.remove('taken');
//         gridCells[index].classList.remove('tetramino');
//         gridCells[index].style.backgroundColor = '';
//       });
//       const cellsRemoved = gridCells.splice(i, GRID_WIDTH);
//       gridCells = cellsRemoved.concat(gridCells);
//       gridCells.forEach(cell => gridContainer.appendChild(cell));
//       console.log(cellsRemoved);
//     }
//   }
// }

// // game over
// function gameOver() {
//   if (currentShape.some(index => gridCells[currentPosition + index].classList.contains('taken'))) {
//     scoreDisplay.innerText = 'Game Over!';
//     clearInterval(timerId);
//   }
// }


// function generateBoard(gridContainer) {
//   let i = 0;
//   let gridCell;

//   // create board grid
//   do {
//     i++;
//     gridCell = document.createElement('div');
//     gridCell.id = `cell-${i}`;

//     /**
//      * create a row of frozen cells at the bottom
//      * of the board, so the current shape knows 
//      * when to stop
//      */
//     if (GRID_CELLS - 10 < i) {
//       gridCell.classList.add('bottom-cells');
//       gridCell.classList.add('taken');
//     }
//     gridContainer.appendChild(gridCell);
//   } while (i < GRID_CELLS);
// }

// function generatePreviewGrid() {
//   const previewGridContainer = document.getElementById('piece-preview');
//   let i = 0;
//   let previewGridCell;

//   do {
//     i++
//     previewGridCell = document.createElement('div');
//     previewGridCell.id = `preview-cell-${i}`;
//     previewGridContainer.appendChild(previewGridCell);
//   } while (i < 16);
// }