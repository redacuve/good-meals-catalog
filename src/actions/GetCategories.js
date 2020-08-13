export const CATEGORY_LIST_SUCCESS = 'CATEGORY_LIST_SUCCESS';
export const CATEGORY_LIST_ERROR = 'CATEGORY_LIST_ERROR';

const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

const GetCategories = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: result,
      });
    })
    .catch(error => {
      dispatch({
        type: CATEGORY_LIST_ERROR,
        payload: error,
      });
    });
};

export default GetCategories;
