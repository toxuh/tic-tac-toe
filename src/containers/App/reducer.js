import produce from 'immer';

import * as types from './types';

export const initialState = {
  board: [false, false, false, false, false, false, false, false, false],
  gameOver: false,
  isDraft: false,
  currentMove: 'x',
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case types.MOVE: {
        const { index, currentMove } = payload;

        draft.board[index] = currentMove;
      }
    }
  });
