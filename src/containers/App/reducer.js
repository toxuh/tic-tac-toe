import produce from 'immer';

import * as types from './types';

export const initialState = {
  board: [false, false, false, false, false, false, false, false, false],
  gameOver: false,
  isDraft: true,
  currentMove: 'x',
};

export default (state = initialState, action) =>
  /* eslint-disable-next-line */
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case types.MOVE: {
        const { index, currentMove } = payload;

        draft.board[index] = currentMove;
        break;
      }

      case types.CHANGE_SIDE: {
        draft.currentMove = draft.currentMove === 'x' ? 'o' : 'x';
        break;
      }

      case types.CHECK_GAME_END: {
        draft.gameOver = !draft.board.includes(false);
        break;
      }

      case types.RESET_GAME: {
        return initialState;
      }
    }
  });
