import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Cell.css';

const Cell = (props) => {
  const { doMove, index, mark } = props;
  const classes = cn({
    Cell: true,
    [mark]: mark,
  });

  return (
    <div
      role="presentation"
      className={classes}
      onClick={() => doMove(index)}
    />
  );
};

Cell.propTypes = {
  doMove: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  mark: PropTypes.oneOf(['x', 'o', false]),
};

Cell.defaultProps = {
  mark: false,
};

export default Cell;
