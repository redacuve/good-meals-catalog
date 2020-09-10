import {
  AREA_LIST_SUCCESS,
  AREA_LIST_ERROR,
} from '../actions/GetAreas';

const initialState = {
  loading: true,
  areas: [],
  errorMsg: '',
};

function CategoriesListReducer(state = initialState, action) {
  switch (action.type) {
    case AREA_LIST_SUCCESS:
      return {
        ...state,
        areas: action.payload,
        errorMsg: '',
        loading: false,
      };
    case AREA_LIST_ERROR:
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
