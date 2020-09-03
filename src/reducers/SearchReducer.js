import {
  SEARCH_SUCCESS,
  SEARCH_ERROR,
} from '../actions/GetSearch';

const initialState = {
  loading: true,
  meals: [],
  errorMsg: '',
};

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        errorMsg: '',
        loading: false,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default SearchReducer;
