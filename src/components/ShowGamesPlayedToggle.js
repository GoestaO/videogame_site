import React from 'react';
import PropTypes from 'prop-types';

const ShowGamesPlayedToggle = (props) => {
  const buttonText = props.text
  return (<button onClick={() => props.toggleGamesPlayed()}>{buttonText}</button>);
}

ShowGamesPlayedToggle.propTypes = {
  toggleGamesPlayed: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default ShowGamesPlayedToggle;
