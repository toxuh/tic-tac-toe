import * as types from './types';

export const bootstrap = () => ({
  type: types.BOOTSTRAP,
});

export const move = (index, currentMove) => ({
  type: types.MOVE,
  payload: {
    index,
    currentMove,
  },
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
