class BasePiece {
  constructor() {
    this.color = '';
    this.position = { x: 0, y: 0 };
    this.cells = [];
  }
  draw(grid) {
    this.cells.forEach(cell => {
      grid.cells[cell.x + this.position.x][cell.y + this.position.y].drawPiece(this.color);
    })
  }
  undraw(grid) {
    this.cells.forEach(cell => {
      grid.cells[cell.x + this.position.x][cell.y + this.position.y].undrawPiece();
    })
  }
  moveDown(grid) {
    this.undraw(grid);
    this.position.x++;
    this.draw(grid);
  }
}

export class TPiece extends BasePiece {
  constructor() {
    super();
    this.color = 'orange';
    this.cells = [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 }
    ]
  }
}