import { MAX_COLUMNS, MAX_ROWS } from "../constants/constants";
import { Cell, CellValue, CellState } from "../types/types";

export const generateCells = (): Cell[][] => {
  const cells: Cell[][] = [];

  for (let row = 0; row < MAX_ROWS; row++) {
    cells.push([]);
    for (let col = 0; col < MAX_COLUMNS; col++) {
      cells[row].push({
        value: CellValue.empty,
        state: CellState.open,
      });
    }
  }

  return cells;
};
