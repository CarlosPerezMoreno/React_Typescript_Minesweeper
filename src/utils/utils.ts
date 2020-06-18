import { MAX_COLUMNS, MAX_ROWS, NO_OF_BOMBS } from "../constants/constants";
import { Cell, CellValue, CellState } from "../types/types";

export const generateCells = (): Cell[][] => {
  let cells: Cell[][] = [];

  // Cell generator
  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLUMNS; col++) {
      cells[row].push({
        value: CellValue.empty,
        state: CellState.open,
      });
    }
  }

  // 10 random bombs
  let bombsPlaced = 0;
  while (bombsPlaced < NO_OF_BOMBS) {
    const rowMath = Math.floor(Math.random() * MAX_ROWS);
    const columnMath = Math.floor(Math.random() * MAX_COLUMNS);
    const currentCell = cells[rowMath][columnMath];

    if (currentCell.value !== CellValue.bomb) {
      cells = cells.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (rowMath === rowIndex && columnMath === colIndex) {
            return {
              ...cell,
              value: CellValue.bomb,
            };
          }
          return cell;
        })
      );
      bombsPlaced++;
    }
  }
  return cells;
};
