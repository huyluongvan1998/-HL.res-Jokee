import axios from 'axios';
import {
  JOKE_REQUEST,
  JOKE_REQUEST_FAIL,
  JOKE_REQUEST_SUCCESS,
} from '../constants/jokeConstants';

export const fetchJokes = () => async (dispatch) => {
  const localStorage = window.localStorage;
  const listOfId = JSON.parse(localStorage.getItem('jokeId'));

  dispatch({
    type: JOKE_REQUEST,
  });
  try {
    const header = { Accept: 'application/json' };
    let { data } = await axios({
      method: 'get',
      url: 'https://icanhazdadjoke.com/',
      headers: header,
    });
    //if id exist in local storage then refetch another joke
    (listOfId || []).filter((id) => data.id === id).length === 0
      ? dispatch({ type: JOKE_REQUEST_SUCCESS, payload: data })
      : ({ data } = await axios({
          method: 'get',
          url: 'https://icanhazdadjoke.com/',
          headers: header,
        }));
  } catch (error) {
    dispatch({ type: JOKE_REQUEST_FAIL, payload: error.message });
  }
};
