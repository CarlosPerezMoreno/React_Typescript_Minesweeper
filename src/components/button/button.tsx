import React from "react";

import "./button.scss";

interface ButtonProps {
  row: number;
  col: number;
}

const Button: React.FC<ButtonProps> = ({ row, col }) => {
  return <div className="slot-button"></div>;
};

export default Button;
