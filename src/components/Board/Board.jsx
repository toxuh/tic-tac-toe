import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Cell from '../Cell/Cell';

import './Board.css';

const Board = (props) => {
  const { board, currentMove, doMove } = props;
  const classes = cn({
    Board: true,
    [currentMove]: currentMove,
  });

  return (
    <div className={classes}>
      {board.map((cellContent, i) => (
        <Cell index={i} mark={cellContent} doMove={doMove} />
      ))}
    </div>
  );
};

Board.propTypes = {
  doMove: PropTypes.func.isRequired,
  board: PropTypes.arrayOf(PropTypes.oneOf(['x', 'o', false])),
  currentMove: PropTypes.oneOf(['x', 'y']),
};

Board.defaultProps = {
  board: [],
  currentMove: 'x',
};

export default Board;
