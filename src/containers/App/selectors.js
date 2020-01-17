import { createSelector } from 'reselect';

export const gameSelector = (state) => state.game;

export const isWinSelector = createSelector(gameSelector, (game) => game.isWin);
