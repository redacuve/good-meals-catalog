import {
  MEAL_SUCCESS,
  MEAL_ERROR,
} from '../actions/GetMeal';

const initialState = {
  loading: true,
  meal: {},
  errorMsg: '',
};

function MealReducer(state = initialState, action) {
  switch (action.type) {
    case MEAL_SUCCESS:
      return {
        ...state,
        meal: action.payload,
        errorMsg: '',
        loading: false,
      };
    case MEAL_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default MealReducer;
