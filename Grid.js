export class Grid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.cells = [];
    this.generate();
    this.initialize();
  }
  generate() {
    for (let x = 0; x < this.height; x++) {
      const row = [];
      for (let y = 0; y < this.width; y++) {
        const cell = new Cell(x, y);
        row.push(cell);
      }
      this.cells.push(row);
    }
  }
  initialize() {
    const gridContainer = document.getElementById('grid-container');
    this.cells.forEach(row => {
      row.forEach(cell => gridContainer.appendChild(cell.domElement));
    });
  }
}

class Cell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.domElement = document.createElement('div');
    this.taken = false;
  }
  drawPiece(color) {
    this.domElement.classList.add('tetramino');
    this.domElement.style.backgroundColor = color;
    this.taken = true;
  }
  undrawPiece() {
    this.domElement.classList.remove('tetramino');
    this.domElement.style.backgroundColor = '';
    this.taken = false;
  }
}