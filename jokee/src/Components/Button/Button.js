import React from 'react';

const Button = ({ type, content, click }) => {
  return (
    <button className={`button btn-${type}`} onClick={click}>
      {content}
    </button>
  );
};

export default Button;
