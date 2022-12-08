import React from 'react';

function GameInfo({ gameBoard, nextTurn, winner, resetGameBoard }) {
  return (
    <>
      <div className='title'>
       Cosimo Tic Tac Toe
      </div>
      <div className='textBottomSection'>
        <div className='winnerMove'>
          {
            winner 
            ? winner + " wins!!"
            : !winner  && !gameBoard.includes(null) 
            ? "Game Tied!!" 
            : "Current Mo: " + (nextTurn ? "Sphere" : "Cube")
          }
        </div>
        <div onClick={resetGameBoard}>
          {
            gameBoard.every(x => x === null) 
            ? null 
            :
            <button className='restartButton'>
              Restart Game
            </button>
          }
        </div>
      </div>
    </>
  );
}

export default GameInfo