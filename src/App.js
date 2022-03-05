import React, { useState, useEffect } from "react";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const isWinning = (board, player) => {
  for (let i = 0; i < winningPositions.length; i++) {
    const arr = [...winningPositions[i]];
    if (board[arr[0]] == player) {
      if (board[arr[1]] == player) {
        if (board[arr[2]] == player) {
          return true;
        }
      }
    }
  }
  return false;
};

const Square = ({
  index,
  board,
  setBoard,
  chance,
  setChance,
  setWinner,
  reRender,
}) => {
  useEffect(() => {}, [board, chance]);
  useEffect(() => {
    if (Object.keys(board).length === 0) setTempBoard({});
  }, [Object.keys(board).length]);
  const [tempBoard, setTempBoard] = useState({});
  return (
    <div
      onClick={() => {
        let newBoard = board;
        newBoard[index] = chance[chance.length - 1] === "X" ? "X" : "O";
        let newChance = chance;
        newChance.push(chance[chance.length - 1] === "X" ? "O" : "X");
        setBoard(newBoard);
        setTempBoard(newBoard);
        setChance(newChance);
        const hasPlayed = newChance[newChance.length - 2];
        console.log(isWinning(board, hasPlayed));
        if (isWinning(board, hasPlayed)) {
          setWinner(hasPlayed);
        }
        reRender((x) => !x);
      }}
      className="square"
      style={squareStyle}
    >
      {tempBoard[index]}
    </div>
  );
};

const Board = () => {
  const [board, setBoard] = useState({});
  const [chance, setChance] = useState(["X"]);
  const [winner, setWinner] = useState(null);
  const [render, reRender] = useState(0);
  useEffect(() => {}, [chance.length]);

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{chance[chance.length - 1]}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner ? winner : "None"}</span>
      </div>
      <button
        onClick={() => {
          setBoard({});
          setChance(["X"]);
          setWinner(null);
          reRender(0);
        }}
        style={buttonStyle}
      >
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={0}
          />
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={1}
          />
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={2}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={3}
          />
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={4}
          />
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={5}
          />
        </div>

        <div className="board-row" style={rowStyle}>
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={6}
          />
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={7}
          />
          <Square
            chance={chance}
            setChance={setChance}
            board={board}
            reRender={reRender}
            setWinner={setWinner}
            setBoard={setBoard}
            index={8}
          />
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default Game;
