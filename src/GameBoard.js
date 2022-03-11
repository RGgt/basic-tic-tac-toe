import GameBoardCell from "./GameBoardCell";
const GameBoard = (props) => {
  return (
    <div>
      {[0, 1, 2].map((x, i) => {
        return (
          <div className="game-board-row" key={i}>
            {[0, 1, 2].map((y, i) => {
              const index = x * 3 + y;

              let isWinningCell = props.winningLine?.includes(index);
              return (
                <GameBoardCell
                  key={index}
                  isWinningCell={isWinningCell}
                  value={props.boardState[index]}
                  setValue={() => {
                    props.onCellClicked(index);
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default GameBoard;
