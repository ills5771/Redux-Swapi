// we'll need axios
import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const fetchingCharacters = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("https://swapi.co/api/people")
    .then(res =>
      dispatch({ type: FETCHING_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err }));
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator
