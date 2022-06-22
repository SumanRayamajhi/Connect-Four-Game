import React from "react";

const Players = ({ player }) => {
  return (
    <div
      style={{
        margin: "10px",
      }}
    >
      Next Player: {player}
    </div>
  );
};

export default Players;
