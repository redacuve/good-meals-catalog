import { CHANGE_AREA_FILTER } from '../actions/ChangeAreasFilter';

function AreasFilterReducer(state = { filter: '' }, action) {
  switch (action.type) {
    case CHANGE_AREA_FILTER:
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

export default AreasFilterReducer;
