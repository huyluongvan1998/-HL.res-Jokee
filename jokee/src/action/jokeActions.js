import axios from 'axios';
import {
  JOKE_REQUEST,
  JOKE_REQUEST_FAIL,
  JOKE_REQUEST_SUCCESS,
} from '../constants/jokeConstants';

export const fetchJokes = () => async (dispatch) => {
  const count = 5;
  dispatch({
    type: JOKE_REQUEST,
  });
  try {
    const header = { Accept: 'application/json' };
    for (let i = 0; i < count; i++) {
      const { data } = await axios({
        method: 'get',
        url: 'https://icanhazdadjoke.com/',
        headers: header,
      });
      dispatch({ type: JOKE_REQUEST_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: JOKE_REQUEST_FAIL, payload: error.message });
  }
};
