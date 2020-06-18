/* Main */

import React from "react";

/* Components */

import NumberDisplay from "./components/NumberDisplay/index";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Header">
        <NumberDisplay value={0} />
        <div className="Face">😊</div>
        <NumberDisplay value={23} />
      </div>
      <div className="Body">Body</div>
    </div>
  );
};

export default App;
