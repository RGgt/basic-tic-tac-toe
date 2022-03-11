import GameBoardCell from "./GameBoardCell";
const GameBoard = () => {
  return (
    <div>
      Game board here
      <div className="game-board-row">
        <GameBoardCell value="X" />
        <GameBoardCell value="0" />
        <GameBoardCell value="X" />
      </div>
      <div className="game-board-row">
        <GameBoardCell value="" />
        <GameBoardCell value="0" />
        <GameBoardCell value="" />
      </div>
      <div className="game-board-row">
        <GameBoardCell value="" />
        <GameBoardCell value="" />
        <GameBoardCell value="" />
      </div>
    </div>
  );
};

export default GameBoard;
