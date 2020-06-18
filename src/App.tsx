/* Main */

import React, { useState } from "react";

/* Components, Utils, Types... */

import NumberDisplay from "./components/NumberDisplay/numberDisplayIndex";
import { generateCells } from "./utils/utils";

import "./App.scss";

const App: React.FC = () => {
  const [cells, setCells] = useState(generateCells());

  console.log(cells);

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
      <div className="Body">Body</div>
    </div>
  );
};

export default App;
