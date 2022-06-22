import React from "react";

function ScoreDisplay({ winner }) {
  return (
    <div
      style={{
        backgroundColor:
          winner === "Player 1 is a Winner!"
            ? "#cc0000"
            : winner === "Player 2 is a Winner!"
            ? "#ffcc00"
            : "white",
        paddingTop: "4px",
        paddingBottom: "4px",
        paddingRight: "10px",
        paddingLeft: "10px",
        borderRadius: "10px",
        color:
          winner === "Player 1 is a Winner!"
            ? "#c2fbd7"
            : winner === "Player 2 is a Winner!"
            ? "#009933"
            : "black",
      }}
    >
      Winner: {winner}
    </div>
  );
}

export default ScoreDisplay;
