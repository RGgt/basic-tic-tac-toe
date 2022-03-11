const GameBoardCell = (props) => {
  const cellOwnerName = props.value ? props.value : <>&nbsp;</>;
  let cellClassName = `game-board-cell cell-owner-${cellOwnerName}`;
  if (props.isWinningCell)
    cellClassName += ` winning-cell-owner-${cellOwnerName}`;
  // Use &nbsp; in empty cells, so they format correctly
  // Use <>&nbsp;</> instead of just &nbsp;, due to a react bug
  return (
    <button className={cellClassName} onClick={props.setValue}>
      {cellOwnerName}
    </button>
  );
};

export default GameBoardCell;
