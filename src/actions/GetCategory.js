export const CATEGORY_SUCCESS = 'CATEGORY_SUCCESS';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';

const URL = term => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${term}`;

const GetCategory = term => dispatch => {
  fetch(URL(term))
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: CATEGORY_SUCCESS,
        payload: result.meals,
      });
    })
    .catch(error => {
      dispatch({
        type: CATEGORY_ERROR,
        payload: error,
      });
    });
};

export default GetCategory;
