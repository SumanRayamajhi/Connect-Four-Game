import React, { useState, useEffect } from "react";
import "./GameBoard.css";
import Players from "../Players/Players";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";

const width = 7;
const colors = ["#cc0000", "#ffcc00"];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState([]);
  const [player, setPlayer] = useState("Player 1");
  const [winner, setWinner] = useState("None");

  const checkColumnForFour = () => {
    for (let i = 0; i <= gameBoard.length; i++) {
      const columnFour = [i, i + width, i + width * 2, i + width * 3];
      const playerOneColor = colors[0];
      const playerTwoColor = colors[1];
      if (columnFour.every((squre) => gameBoard[squre] === playerOneColor)) {
        setWinner("Player 1 is a Winner!");
      } else if (
        columnFour.every((squre) => gameBoard[squre] === playerTwoColor)
      ) {
        setWinner("Player 2 is a Winner!");
      }
    }
  };

  const checkRowForFour = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      const rowFour = [i, i + 1, i + 2, i + 3];
      // const isNotValidSquare = [
      //   4, 5, 6, 11, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34, 39, 40, 41,
      // ];
      const playerOneColor = colors[0];
      const playerTwoColor = colors[1];
      // if (isNotValidSquare.includes(i)) continue;
      if (rowFour.every((squre) => gameBoard[squre] === playerOneColor)) {
        setWinner("Player 1 is a Winner!");
      } else if (
        rowFour.every((squre) => gameBoard[squre] === playerTwoColor)
      ) {
        setWinner("Player 2 is a Winner!");
      }
    }
  };

  const checkDiagonalRightForFour = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      const diagonalRightFour = [
        i,
        i + (width + 1),
        i + (width + 1) * 2,
        i + (width + 1) * 3,
      ];
      // const isNotValidSquare = [
      //   4, 5, 6, 12, 13, 20, 21, 25, 28, 29, 35, 36, 37,
      // ];
      const playerOneColor = colors[0];
      const playerTwoColor = colors[1];
      // if (isNotValidSquare.includes(i)) continue;
      if (
        diagonalRightFour.every((squre) => gameBoard[squre] === playerOneColor)
      ) {
        setWinner("Player 1 is a Winner!");
      } else if (
        diagonalRightFour.every((squre) => gameBoard[squre] === playerTwoColor)
      ) {
        setWinner("Player 2 is a Winner!");
      }
    }
  };

  const checkDiagonalLeftForFour = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      const diagonalLeftFour = [
        i,
        i + (width - 1),
        i + (width - 1) * 2,
        i + (width - 1) * 3,
      ];
      //const isNotValidSquare = [0, 1, 2, 7, 8, 14, 27, 33, 34, 39, 40, 41];
      const playerOneColor = colors[0];
      const playerTwoColor = colors[1];
      // if (isNotValidSquare.includes(i)) continue;
      if (
        diagonalLeftFour.every((squre) => gameBoard[squre] === playerOneColor)
      ) {
        setWinner("Player 1 is a Winner!");
      } else if (
        diagonalLeftFour.every((squre) => gameBoard[squre] === playerTwoColor)
      ) {
        setWinner("Player 2 is a Winner!");
      }
    }
  };

  const createGameBoard = () => {
    let randomBoardArrangement = [];
    const initalState = "";
    for (let i = 0; i < width * 6; i++) {
      randomBoardArrangement.push(initalState);
    }
    setGameBoard(randomBoardArrangement);
  };

  const resetHandler = () => {
    createGameBoard();
    setPlayer("Player 1");
    setWinner("None");
  };

  useEffect(() => {
    createGameBoard();
  }, []);

  const handleClick = (i) => {
    const columnNumber = i % width;
    if (winner === "None") {
      if (player === "Player 1") {
        gameBoard[columnNumber] = colors[0];
        setPlayer("Player 2");
      } else if (player === "Player 2") {
        gameBoard[columnNumber] = colors[1];
        setPlayer("Player 1");
      }
    } else {
      setPlayer("Game Over!");
    }
  };

  const moveColorsBelow = () => {
    setGameBoard((prevValue) => {
      let newValue = [...prevValue];
      for (let i = 0; i < newValue.length - width; i++) {
        const playerOneColor = colors[0];
        const playerTwoColor = colors[1];
        if (newValue[i] === playerOneColor || newValue[i] === playerTwoColor) {
          if (newValue[i + width] === "") {
            newValue[i + width] = newValue[i];
            newValue[i] = "";
          }
        }
      }
      return newValue;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      checkColumnForFour();
      checkRowForFour();
      checkDiagonalRightForFour();
      checkDiagonalLeftForFour();
      moveColorsBelow();
    }, 200);
    return () => clearTimeout(timer);
  }, [moveColorsBelow]);

  return (
    <div className="app">
      <ScoreDisplay winner={winner} />
      <Players player={player} />
      <button className="ResetButton" onClick={resetHandler}>
        Reset
      </button>
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
