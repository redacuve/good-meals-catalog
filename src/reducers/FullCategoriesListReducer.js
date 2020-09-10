import {
  FULL_CATEGORY_LIST_SUCCESS,
  FULL_CATEGORY_LIST_ERROR,
} from '../actions/GetFullCategories';

const initialState = {
  loading: true,
  categories: [],
  errorMsg: '',
};

function CategoriesListReducer(state = initialState, action) {
  switch (action.type) {
    case FULL_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        errorMsg: '',
        loading: false,
      };
    case FULL_CATEGORY_LIST_ERROR:
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
