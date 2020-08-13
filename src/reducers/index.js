import { combineReducers } from 'redux';
import CategoriesListReducer from './CategoriesListReducer';
import FullCategoriesListReducer from './FullCategoriesListReducer';
import AreasListReducer from './AreasListReducer';

const rootReducer = combineReducers({
  CategoriesList: CategoriesListReducer,
  FullCategoriesList: FullCategoriesListReducer,
  AreasList: AreasListReducer,
});

export default rootReducer;
