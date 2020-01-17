import React from 'react';
import PropTypes from 'prop-types';

import './Popup.css';

const Popup = (props) => {
  const { isDraft, winner } = props;

  return (
    <div className="Popup">
      <div>{isDraft ? 'Draft' : `${winner} wins`}</div>
      <button type="button">Restart</button>
    </div>
  );
};

Popup.propTypes = {
  winner: PropTypes.oneOf(['x', 'o']).isRequired,
  isDraft: PropTypes.bool,
};

Popup.defaultProps = {
  isDraft: false,
};

export default Popup;
