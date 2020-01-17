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
    (index) => dispatch(actions.move(index, currentMove)),
    [dispatch, currentMove],
  );

  return (
    <>
      <Board board={board} currentMove={currentMove} doMove={doMove} />
      {gameOver && <Popup isDraft={isDraft} winner={currentMove} />}
    </>
  );
}

export default App;
