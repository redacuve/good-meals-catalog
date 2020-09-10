export const FULL_CATEGORY_LIST_SUCCESS = 'FULL_CATEGORY_LIST_SUCCESS';
export const FULL_CATEGORY_LIST_ERROR = 'FULL_CATEGORY_LIST_ERROR';

const URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const GetFullCategories = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: FULL_CATEGORY_LIST_SUCCESS,
        payload: result.categories,
      });
    })
    .catch(error => {
      dispatch({
        type: FULL_CATEGORY_LIST_ERROR,
        payload: error,
      });
    });
};

export default GetFullCategories;
