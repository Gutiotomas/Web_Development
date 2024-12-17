import React from "react";
import { useState } from "react";
import { Square } from "./Square.tsx";
import { BoardCells } from "../types";

export const Board: React.FC = () => {
  const [squares, setSquares] = useState<BoardCells>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    squares[i] = xIsNext ? "X" : "O";
    setSquares();
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <h1>The next player is {xIsNext ? "X" : "O"}</h1>
      <div className="board">
        <div className="square">{squares[0]}</div>
        <div className="square">{squares[1]}</div>
        <div className="square">{squares[2]}</div>
        <div className="square">{squares[3]}</div>
        <div className="square">{squares[4]}</div>
        <div className="square">{squares[5]}</div>
        <div className="square">{squares[6]}</div>
        <div className="square">{squares[7]}</div>
        <div className="square">{squares[9]}</div>
      </div>
    </>
  );
};
