import { Grid } from './Grid.js';
import { TPiece } from './Piece.js';

export class Game {
  constructor() {
    this.timerId = null;
    this.score = 0;
    this.isPaused = true;
    this.startButton = document.getElementById('start-button');
    this.currentShape = null;
    this.initialize();
  }
  initialize() {
    this.grid = new Grid(10, 20);
  }
  start() {
    this.isPaused = false;
    this.timerId = setInterval(this.tick.bind(this), 800);
    this.startButton.innerText = "Pause";
  }
  stop() {
    this.isPaused = true;
    clearInterval(this.timerId);
    this.timerId = null;
    this.startButton.innerText = "Resume";
  }
  tick() {
    console.log('ticking');
    if (!this.currentShape) {
      this.currentShape = new TPiece();
    }
    this.currentShape.moveDown(this.grid);
  }
}