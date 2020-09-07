import { CHANGE_CATEGORY_FILTER } from '../actions/ChangeCategoriesFilter';

function CategoriesFilterReducer(state = { filter: '' }, action) {
  switch (action.type) {
    case CHANGE_CATEGORY_FILTER:
      if (action.payload === 'All') {
        return {
          filter: '',
        };
      }
      return {
        filter: action.payload,
      };

    default:
      return { ...state, filter: '' };
  }
}

export default CategoriesFilterReducer;
