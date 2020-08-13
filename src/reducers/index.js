import { combineReducers } from 'redux';
import CategoriesListReducer from './CategoriesListReducer';
import AreasListReducer from './AreasListReducer';

const rootReducer = combineReducers({
  CategoriesList: CategoriesListReducer,
  AreasList: AreasListReducer,
});

export default rootReducer;
