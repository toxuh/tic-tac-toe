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
