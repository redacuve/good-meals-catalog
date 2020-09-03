import { CHANGE_FILTER } from '../actions/ChangeAreasFilter';

function AreasFilterReducer(state = { filter: '' }, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.payload === 'All') {
        return {
          filter: '',
        };
      }
      return {
        filter: action.payload,
      };

    default:
      return { ...state };
  }
}

export default AreasFilterReducer;
