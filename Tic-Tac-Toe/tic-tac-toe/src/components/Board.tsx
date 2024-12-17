import React from "react";
import { useState } from "react";
import { Square } from "./Square.tsx";
import { BoardCells } from "../types";

export const Board: React.FC = () => {
  const [squares, setSquares] = useState<BoardCells>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    setSquares(squares.with(i, xIsNext ? "X" : "O"));
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <h1>The next player is {xIsNext ? "X" : "O"}</h1>
      <div className="board">
        <div className="square" onClick={() => handleClick(0)}>
          {squares[0]}
        </div>
        <div className="square" onClick={() => handleClick(1)}>
          {squares[1]}
        </div>
        <div className="square" onClick={() => handleClick(2)}>
          {squares[2]}
        </div>
        <div className="square" onClick={() => handleClick(3)}>
          {squares[3]}
        </div>
        <div className="square" onClick={() => handleClick(4)}>
          {squares[4]}
        </div>
        <div className="square" onClick={() => handleClick(5)}>
          {squares[5]}
        </div>
        <div className="square" onClick={() => handleClick(6)}>
          {squares[6]}
        </div>
        <div className="square" onClick={() => handleClick(7)}>
          {squares[7]}
        </div>
        <div className="square" onClick={() => handleClick(8)}>
          {squares[8]}
        </div>
      </div>
    </>
  );
};
