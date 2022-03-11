const GameBoardCell = (props) => {
  return (
    <button className="game-board-cell">
      {props.value ? props.value : <>&nbsp;</>}
    </button>
  );
};

export default GameBoardCell;
