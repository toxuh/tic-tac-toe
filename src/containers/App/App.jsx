import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Board, Popup } from '~/components';

import * as actions from './actions';
import * as selectors from './selectors';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const board = useSelector(selectors.boardSelector);
  const currentMove = useSelector(selectors.currentMoveSelector);
  const gameOver = useSelector(selectors.gameOverSelector);
  const isDraft = useSelector(selectors.isDraftSelector);

  const doMove = useCallback(
    (index) => {
      if (!board[index]) {
        dispatch(actions.move(index, currentMove));
        dispatch(actions.checkWinning());
        dispatch(actions.checkGameEnd());
        dispatch(actions.changeSide());
      }
    },
    [dispatch, currentMove, board],
  );

  const resetGame = useCallback(() => dispatch(actions.resetGame()), [
    dispatch,
  ]);

  return (
    <>
      <Board board={board} currentMove={currentMove} doMove={doMove} />
      {gameOver && (
        <Popup isDraft={isDraft} winner={currentMove} resetGame={resetGame} />
      )}
    </>
  );
}

export default App;
