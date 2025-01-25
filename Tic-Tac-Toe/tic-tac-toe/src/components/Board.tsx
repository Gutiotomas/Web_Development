import React from "react";
import { useState } from "react";
//import { Square } from "./Square.tsx";
import { BoardCells } from "../types";
import { Square } from "./Square";

export const Board: React.FC = () => {
  const [squares, setSquares] = useState<BoardCells>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i: number) => {
    setSquares(squares.with(i, xIsNext ? "X" : "O"));
    setXIsNext(!xIsNext);
  };

  const title = <h1>The next player is {xIsNext ? "X" : "O"}</h1>;
  const showTitle = true;
  return (
    <>
      {showTitle && title}
      <div className="board">
        {
            squares.map((value,i)=>
                <Square key={i}/>)
                <div key={i} className="square" onClick={() => handleClick(i)}>{value}</div>)
        }
      </div>
    </>
  );
};
