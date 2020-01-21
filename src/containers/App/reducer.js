import produce from 'immer';

import * as types from './types';

export const initialState = {
  settings: {
    field: { x: 3, y: 3 },
    winningPositions: [],
  },
  board: [],
  gameOver: false,
  isDraft: true,
  currentMove: 'x',
};

export default (state = initialState, action) =>
  /* eslint-disable-next-line */
  produce(state, (draft) => {
    const { type, payload } = action;

    switch (type) {
      case types.BOOTSTRAP: {
        const { x, y } = draft.settings.field;

        // Create array of falsies for board
        draft.board = new Array(x * y).fill(false);

        // Create horizontal wins positions
        for (let i = 0; i < y; i += 1) {
          draft.settings.winningPositions.push([i * x, i * x + 1, i * x + 2]);
        }

        // Create vertical wins positions
        for (let i = 0; i < x; i += 1) {
          draft.settings.winningPositions.push([i, i + y, i + 2 * y]);
        }

        // If x === y, create diagonal wins positions
        if (x === y) {
          const tl = [];
          const tr = [];

          for (let i = 0; i < y; i += 1) {
            tl.push(i * (x + 1));
          }

          for (let i = 0; i < y; i += 1) {
            tr.push(x - 1 + i * (x - 1));
          }

          draft.settings.winningPositions.push(tl);
          draft.settings.winningPositions.push(tr);
        }

        break;
      }

      case types.MOVE: {
        const { index, currentMove } = payload;

        draft.board[index] = currentMove;

        break;
      }

      case types.CHECK_GAME_END: {
        draft.gameOver = draft.gameOver || !draft.board.includes(false);
        break;
      }

      case types.CHECK_WINNING: {
        const win = draft.settings.winningPositions.some((position) => {
          return position.every((index) => {
            return draft.board[index] === draft.currentMove;
          });
        });

        if (win) {
          draft.gameOver = true;
          draft.isDraft = false;
        } else {
          draft.currentMove = draft.currentMove === 'x' ? 'o' : 'x';
        }

        break;
      }

      case types.RESET_GAME: {
        return initialState;
      }
    }
  });
