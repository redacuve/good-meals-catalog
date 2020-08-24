import {
  CATEGORY_SUCCESS,
  CATEGORY_ERROR,
} from '../actions/GetCategory';

const initialState = {
  loading: true,
  meals: [],
  errorMsg: '',
};

function CategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        errorMsg: '',
        loading: false,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default CategoriesReducer;
