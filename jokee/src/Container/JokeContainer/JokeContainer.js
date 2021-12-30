import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchJokes } from '../../action/jokeActions';
import Banner from '../../Components/Banner/Banner';
import Button from '../../Components/Button/Button';
import Joke from '../../Components/Joke/Joke';
import { Spinner } from '../../Components/Spinner/Spinner';

const JokeContainer = () => {
  const dispatch = useDispatch();
  const jokeList = useSelector((state) => state.jokeList);
  // eslint-disable-next-line no-unused-vars
  const { loading, error, jokes } = jokeList;

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);
  return (
    <main>
      <Banner />
      <div className='joke'>{loading ? <Spinner /> : <Joke />}</div>
      <div className='joke-button'>
        <Button type='primary' content='this is Funny!' />
        <Button type='success' content='this is not Funny.' />
      </div>
    </main>
  );
};

export default JokeContainer;
