export const AREA_LIST_SUCCESS = 'AREA_LIST_SUCCESS';
export const AREA_LIST_ERROR = 'AREA_LIST_ERROR';

const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const GetAreas = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: AREA_LIST_SUCCESS,
        payload: result.meals,
      });
    })
    .catch(error => {
      dispatch({
        type: AREA_LIST_ERROR,
        payload: error,
      });
    });
};

export default GetAreas;
