import {
  JOKE_REQUEST,
  JOKE_REQUEST_FAIL,
  JOKE_REQUEST_SUCCESS,
} from '../constants/jokeConstants';

export const jokeReducers = (state = {}, action) => {
  switch (action.type) {
    case JOKE_REQUEST:
      return { loading: true };
    case JOKE_REQUEST_SUCCESS:
      const joke = action.payload;
      return {
        loading: false,
        joke: joke,
      };
    case JOKE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
