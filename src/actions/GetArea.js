export const AREA_SUCCESS = 'AREA_SUCCESS';
export const AREA_ERROR = 'AREA_ERROR';

const URL = term => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${term}`;

const GetArea = term => dispatch => {
  fetch(URL(term))
    .then(response => response.json())
    .then(result => {
      if (result.meals !== null) {
        dispatch({
          type: AREA_SUCCESS,
          payload: result.meals,
        });
      } else {
        dispatch({
          type: AREA_ERROR,
          payload: '404 Not Results found',
        });
      }
    })
    .catch(error => {
      dispatch({
        type: AREA_ERROR,
        payload: error,
      });
    });
};

export default GetArea;
