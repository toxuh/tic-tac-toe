import { createSelector } from 'reselect';

export const gameSelector = (state) => state.game;

export const boardSelector = createSelector(gameSelector, (game) => game.board);

export const gameOverSelector = createSelector(
  gameSelector,
  (game) => game.gameOver,
);

export const currentMoveSelector = createSelector(
  gameSelector,
  (game) => game.currentMove,
);

export const isDraftSelector = createSelector(
  gameSelector,
  (game) => game.isDraft,
);
