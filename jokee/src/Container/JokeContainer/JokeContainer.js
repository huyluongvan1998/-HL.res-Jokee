import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchJokes } from '../../action/jokeActions';
import Banner from '../../Components/Banner/Banner';
import Button from '../../Components/Button/Button';
import Joke from '../../Components/Joke/Joke';
import { Spinner } from '../../Components/Spinner/Spinner';

const JokeContainer = () => {
  const dispatch = useDispatch();
  const currentJoke = useSelector((state) => state.jokeList);
  // eslint-disable-next-line no-unused-vars
  const { loading, error, joke } = currentJoke;
  const localStorage = window.localStorage;
  let listOfId = JSON.parse(localStorage.getItem('jokeId')) || [];
  let likedJokes = JSON.parse(localStorage.getItem('isLike')) || [];
  let hatedJokes = JSON.parse(localStorage.getItem('unLike')) || [];

  let counterLike = likedJokes.length;
  let counterHate = hatedJokes.length;

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);
  const isFunnyHandler = ({ joke, id }) => {
    listOfId.push(id);
    likedJokes.push({ joke, id });
    counterLike = likedJokes.length;
    localStorage.setItem('jokeId', JSON.stringify(listOfId));
    localStorage.setItem('isLike', JSON.stringify(likedJokes));
    dispatch(fetchJokes());
  };

  const isNotLikeHandler = ({ joke, id }) => {
    listOfId.push(id);
    hatedJokes.push({ joke, id });
    counterHate = hatedJokes.length;
    localStorage.setItem('jokeId', JSON.stringify(listOfId));
    localStorage.setItem('unLike', JSON.stringify(hatedJokes));
    dispatch(fetchJokes());
  };

  return (
    <main>
      <div className='counter'>
        <div className='counter-like white-700'>Like Jokes: {counterLike} </div>
        <div className='counter-hate white-700'>Hate Jokes: {counterHate} </div>
      </div>
      <Banner />
      <div className='joke'>
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className='error'> {error} </div>
        ) : (
          <Joke joke={joke} />
        )}
      </div>
      <div className='joke-button'>
        <Button
          type='primary'
          content='this is Funny!'
          click={() => isFunnyHandler(joke)}
        />
        <Button
          type='success'
          content='this is not Funny.'
          click={() => isNotLikeHandler(joke)}
        />
      </div>
    </main>
  );
};

export default JokeContainer;
