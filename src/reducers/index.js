import { combineReducers } from 'redux';
import CategoriesListReducer from './CategoriesListReducer';

const rootReducer = combineReducers({
  CategoriesList: CategoriesListReducer,
});

export default rootReducer;
