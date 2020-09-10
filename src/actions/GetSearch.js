export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_ERROR = 'SEARCH_ERROR';

const URL = term => `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;

const GetSearch = term => dispatch => {
  fetch(URL(term))
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: result.meals,
      });
    })
    .catch(error => {
      dispatch({
        type: SEARCH_ERROR,
        payload: error,
      });
    });
};

export default GetSearch;
