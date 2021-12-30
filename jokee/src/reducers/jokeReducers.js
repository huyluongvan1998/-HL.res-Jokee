import {
  JOKE_REQUEST,
  JOKE_REQUEST_FAIL,
  JOKE_REQUEST_SUCCESS,
} from '../constants/jokeConstants';

export const jokeReducers = (state = { jokes: [] }, action) => {
  switch (action.type) {
    case JOKE_REQUEST:
      return { loading: true, ...state };
    case JOKE_REQUEST_SUCCESS:
      const joke = action.payload;
      return {
        loading: false,
        jokes: [...state.jokes, joke],
      };
    case JOKE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return { ...state };
  }
};
