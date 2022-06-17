import React, { useState, useEffect } from "react";
import "./GameBoard.css";
import Players from "../Players/Players";
import ScoreDisplay from "../ScoreDisplay/ScoreDisplay";

const width = 7;
const colors = ["#cc0000", " #ffcc00"];

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState([]);
  const [player, setPlayer] = useState("Player 1");
  const [winner, setWinner] = useState("None");

  const checkColumnForFour = () => {
    for (let i = 0; i <= 27; i++) {
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
    for (let i = 0; i < 42; i++) {
      const rowFour = [i, i + 1, i + 2, i + 3];
      const isNotValidSquare = [
        4, 5, 6, 11, 12, 13, 18, 19, 20, 25, 26, 27, 32, 33, 34, 39, 40, 41,
      ];
      const playerOneColor = colors[0];
      const playerTwoColor = colors[1];
      if (isNotValidSquare.includes(i)) continue;
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
    for (let i = 0; i < 42; i++) {
      const diagonalRightFour = [i, i + 8, i + 8 * 2, i + 8 * 3];
      const isNotValidSquare = [
        4, 5, 6, 12, 13, 20, 21, 25, 28, 29, 35, 36, 37,
      ];
      const playerOneColor = colors[0];
      const playerTwoColor = colors[1];
      if (isNotValidSquare.includes(i)) continue;
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
    for (let i = 0; i < 42; i++) {
      const diagonalLeftFour = [i, i + 6, i + 6 * 2, i + 6 * 3];
      const isNotValidSquare = [0, 1, 2, 7, 8, 14, 27, 33, 34, 39, 40, 41];
      const playerOneColor = colors[0];
      const playerTwoColor = colors[1];
      if (isNotValidSquare.includes(i)) continue;
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
    for (let i = 0; i < width * 6; i++) {
      randomBoardArrangement.push(gameBoard[i]);
    }
    setGameBoard(randomBoardArrangement);
  };

  const resetHandler = () => {
    setPlayer("Player 1");
    setWinner("None");
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
    }
  };

  console.log(player);

  const moveColorsBelow = () => {
    for (let i = 0; i < 35; i++) {
      if (gameBoard[i + width] === undefined) {
        gameBoard[i + width] = gameBoard[i];
        gameBoard[i] = undefined;
      }
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      moveColorsBelow();
      checkColumnForFour();
      checkRowForFour();
      checkDiagonalRightForFour();
      checkDiagonalLeftForFour();
    }, 100);
    return () => clearInterval(timer);
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
