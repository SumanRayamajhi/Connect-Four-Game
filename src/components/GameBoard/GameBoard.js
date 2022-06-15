import React, { useState, useEffect } from "react";
import "./GameBoard.css";
import Players from "../Players/Players";

const width = 7;
const colors = ["green", "blue", ""];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState([]);
  const [player, setPlayer] = useState("Player 1");

  const createGameBoard = () => {
    let randomBoardArrangement = [];
    for (let i = 0; i < width * 6; i++) {
      randomBoardArrangement.push(gameBoard[i]);
    }
    setGameBoard(randomBoardArrangement);
  };

  useEffect(() => {
    createGameBoard();
  }, []);
  console.log(gameBoard);

  const handleClick = (i) => {
    const firstColumn = [0, 7, 14, 21, 28, 35];
    const isFirstColumn = firstColumn.includes(i);
    const secondColumn = [1, 8, 15, 22, 29, 36];
    const isSecondColumn = secondColumn.includes(i);
    const thirdColumn = [2, 9, 16, 23, 30, 37];
    const isThirdColumn = thirdColumn.includes(i);
    const forthColumn = [3, 10, 17, 24, 31, 38];
    const isForthColumn = forthColumn.includes(i);
    const fifthColumn = [4, 11, 18, 25, 32, 39];
    const isFifthColumn = fifthColumn.includes(i);
    const sixthColumn = [5, 12, 19, 26, 33, 40];
    const isSixthColumn = sixthColumn.includes(i);
    const seventhColumn = [6, 13, 20, 27, 34, 41];
    const isSeventhColumn = seventhColumn.includes(i);

    if (player === "Player 1") {
      if (isFirstColumn) {
        gameBoard[0] = colors[0];
      }
      if (isSecondColumn) {
        gameBoard[1] = colors[0];
      }
      if (isThirdColumn) {
        gameBoard[2] = colors[0];
      }
      if (isForthColumn) {
        gameBoard[3] = colors[0];
      }
      if (isFifthColumn) {
        gameBoard[4] = colors[0];
      }
      if (isSixthColumn) {
        gameBoard[5] = colors[0];
      }
      if (isSeventhColumn) {
        gameBoard[6] = colors[0];
      }
      setPlayer("Player 2");
    } else if (player === "Player 2") {
      if (isFirstColumn) {
        gameBoard[0] = colors[1];
      }
      if (isSecondColumn) {
        gameBoard[1] = colors[1];
      }
      if (isThirdColumn) {
        gameBoard[2] = colors[1];
      }
      if (isForthColumn) {
        gameBoard[3] = colors[1];
      }
      if (isFifthColumn) {
        gameBoard[4] = colors[1];
      }
      if (isSixthColumn) {
        gameBoard[5] = colors[1];
      }
      if (isSeventhColumn) {
        gameBoard[6] = colors[1];
      }
      setPlayer("Player 1");
    } else {
      gameBoard[i] = colors[2];
    }
  };

  console.log(player);

  return (
    <div className="app">
      <Players player={player} />
      <div className="game">
        {gameBoard.map((color, i) => (
          <div
            className="game-div"
            key={i}
            value={color}
            style={{
              backgroundColor: !player ? "green" : color,
              borderRadius: "50px",
            }}
            onClick={() => handleClick(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
