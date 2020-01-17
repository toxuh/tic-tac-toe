import * as types from './types';

export const move = (index, currentMove) => ({
  type: types.MOVE,
  payload: {
    index,
    currentMove,
  },
});

export const changeSide = () => ({
  type: types.CHANGE_SIDE,
});

export const checkGameEnd = () => ({
  type: types.CHECK_GAME_END,
});

export const checkWinning = () => ({
  type: types.CHECK_WINNING,
});

export const resetGame = () => ({
  type: types.RESET_GAME,
});
