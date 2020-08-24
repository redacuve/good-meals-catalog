export const MEAL_SUCCESS = 'MEAL_SUCCESS';
export const MEAL_ERROR = 'MEAL_ERROR';

const URL = id => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

const GetMeal = id => dispatch => {
  fetch(URL(id))
    .then(response => response.json())
    .then(result => {
      if (result.meals !== null) {
        dispatch({
          type: MEAL_SUCCESS,
          payload: result.meals[0],
        });
      } else {
        dispatch({
          type: MEAL_ERROR,
          payload: 'NOT FOUND',
        });
      }
    })
    .catch(error => {
      dispatch({
        type: MEAL_ERROR,
        payload: error,
      });
    });
};

export default GetMeal;
