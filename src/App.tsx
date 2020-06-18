/* Main */

import React, { useState } from "react";

/* Components, Utils, Types... */

import NumberDisplay from "./components/NumberDisplay/numberDisplayIndex";
import { generateCells } from "./utils/utils";
import Button from "./components/button/button";

import "./App.scss";

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());

  const renderCells = (): React.ReactNode => {
    return cells.map((row, rowIndex) =>
      row.map((col, colIndex) => (
        <Button key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} />
      ))
    );
  };

  return (
    <div className="App">
      <div className="Header">
        <NumberDisplay value={0} />
        <div className="Face">
          <span role="img" aria-label="">
            😊
          </span>
        </div>
        <NumberDisplay value={23} />
      </div>
      <div className="Body">{renderCells()}</div>
    </div>
  );
};

export default App;
