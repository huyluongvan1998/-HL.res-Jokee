import React from 'react';

const Button = ({ type, content }) => {
  return <div className={`button btn-${type}`}>{content}</div>;
};

export default Button;
