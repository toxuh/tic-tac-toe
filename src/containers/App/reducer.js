import produce from 'immer';

export const initialState = {
  table: [],
  isWin: false,
  isDraft: false,
  firstMoveCross: true,
};

export default (state = initialState) => produce(state, () => {});
