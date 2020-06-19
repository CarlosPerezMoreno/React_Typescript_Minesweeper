export enum CellValue {
  empty,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  bomb,
}

export enum CellState {
  open,
  visible,
  flagged,
}

export type Cell = { value: CellValue; state: CellState };

export enum Face {
  smile = "😊",
  surprise = "😮",
  gameover = "💀",
  win = "😎",
}
