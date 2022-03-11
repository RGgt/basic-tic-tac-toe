import { useState } from "react";
import GameBoard from "./GameBoard";

const Game = () => {
  const [gameState, setGameState] = useState({
    move: 0,
    player: "X",
    stateHistory: [Array(9).fill(null)],
    isGameOver: null,
    winningLine: null,
  });

  const onCellClicked = (cellIndex) => {
    if (gameState.isGameOver) return;
    let boardState = gameState.stateHistory[gameState.stateHistory.length - 1];
    const cellValue = boardState[cellIndex];
    if (cellValue) return;
    let newState = [...boardState];
    newState[cellIndex] = gameState.player;
    setGameState({
      stateHistory: [...gameState.stateHistory, newState],
      player: gameState.player === "X" ? "0" : "X",
      move: gameState.move + 1,
      isGameOver: checkVictory(newState),
      winningLine: getWinningLine(newState),
    });
  };

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkVictory = (boardState) => {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (
        boardState[line[0]] &&
        boardState[line[0]] === boardState[line[1]] &&
        boardState[line[0]] === boardState[line[2]]
      ) {
        console.log(`victory on line ${i}`);
        return boardState[line[0]];
      }
    }
  };

  const getWinningLine = (boardState) => {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (
        boardState[line[0]] &&
        boardState[line[0]] === boardState[line[1]] &&
        boardState[line[0]] === boardState[line[2]]
      )
        return line;
    }
  };

  function getGameStatus() {
    if (gameState.isGameOver)
      return `Game over! \n${gameState.isGameOver} won.`;
    if (gameState.move === 0)
      return `The first move. \n"${gameState.player}" starts.`;
    if (gameState.move === 1)
      return `The second move. \nIt's "${gameState.player}"'s turn.`;
    if (gameState.move === 2)
      return `The third move. \nIt's "${gameState.player}"'s turn.`;
    return `Move ${gameState.move + 1}. \nIt's "${gameState.player}"'s turn.`;
  }

  return (
    <div>
      <h1 id="game-status-info">{getGameStatus()}</h1>
      <GameBoard
        winningLine={gameState.winningLine}
        boardState={gameState.stateHistory[gameState.stateHistory.length - 1]}
        onCellClicked={onCellClicked}
      />
    </div>
  );
};

export default Game;
