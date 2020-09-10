import {
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_ERROR,
} from '../actions/GetCategories';

const initialState = {
  loading: true,
  categories: [],
  errorMsg: '',
};

function CategoriesListReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        errorMsg: '',
        loading: false,
      };
    case CATEGORY_LIST_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default CategoriesListReducer;
