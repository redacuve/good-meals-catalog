import {
  AREA_SUCCESS,
  AREA_ERROR,
} from '../actions/GetArea';

const initialState = {
  loading: true,
  meals: [],
  errorMsg: '',
};

function AreaReducer(state = initialState, action) {
  switch (action.type) {
    case AREA_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        errorMsg: '',
        loading: false,
      };
    case AREA_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default AreaReducer;
