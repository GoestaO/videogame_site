import React from 'react';

const ErrorMessage = (props) => {
  const errorMessage = props.ErrorMessage;
  const isActive = props.isActive;
  console.log(isActive);
  if (isActive) {
    return (<div className="alert">
      <span className="closebtn" onClick={props.hideErrorMessage}>&times;</span>
      {props.errorMessage}
    </div>);
  } else
    return null;
  }

export default ErrorMessage;
