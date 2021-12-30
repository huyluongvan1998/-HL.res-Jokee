import React from 'react';

const Joke = ({ joke }) => {
  return <div className='joke-content black-500'>{joke?.joke}</div>;
};

export default Joke;
